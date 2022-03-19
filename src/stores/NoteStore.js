// @flow

import type { Translation } from '../types/Translation.js'
import type { Book } from '../types/Book.js'
import type { Nonr } from '../nonr/nonr.js'
import type { LineElement } from '../types/LineElement.js'
import { fromPromise, nonr } from '../nonr/nonr.js'
import { getVerse } from '../versions/versions.js'

export const store = nonr({
  translation: 'web',
  book: 'genesis',
  chapter: 1,
  verseStart: 1,
  verseEnd: 4,
})

export const lineElements: () => Array<LineElement> = nonr(() => {
  console.log('store.chapter', store.chapter)
  // console.log('should register')
  const s = _lineElements()
  // console.log('s', s.value)
  // console.log('s', s.state)

  // Now the problem is that when fromPromise causes this function to recompute,
  // the return value of this function changed, but that change is not being detected
  // and propagated to dependents of lineElement

  return s.value
})

function _lineElements(): Nonr {
  // now the problem is that there is an infinite loop
  // because even though we are returning the same nonr obj that was created
  // when fromPromise runs the first time,
  // we are still:
  //   * Potentially making duplicate server calls. This can be solved later when we make the server part. It will use caching/fetch-policy.
  //   * In fromPromise, the setters will run again. This will set the same value, so our problem is that we are triggering updates even when the setter isn't changing anything.
  //

  const p = Promise.resolve().then(async () => {
    const elements: Array<LineElement> = []
    for (let i = store.verseStart; i < store.verseEnd + 1; i++) {
      const verse = await getVerse({
        translation: 'web',
        book: store.book,
        chapter: store.chapter,
        verse: i,
      })
      const el: LineElement = {
        id: '',
        vloc: {
          translation: store.translation,
          book: store.book,
          chapter: store.chapter,
          verse: i,
        },
        indent: 0,
        verse: verse || '',
        markdown: verse || '',
      }
      elements.push(el)
    }
    return elements
  })

  // this is called on re-computes:
  // any nonr objects created during a recompute need to be blocked somehow.

  return fromPromise(p)
}

// export class NoteStore {
//   translation: Translation
//   book: Book
//   chapter: number
//   verseStart: number
//   verseEnd: number
//
//   constructor() {
//     store.translation = 'web'
//     store.book = 'genesis'
//     store.chapter = 1
//     store.verseStart = 1
//     store.verseEnd = 4
//   }
//
//   get lineElements(): Array<LineElement> {
//     return store._lineElements.value
//   }
//
//   get _lineElements(): MobxPromise<Array<LineElement>> {
//     const p = Promise.resolve().then(async () => {
//       const elements: Array<LineElement> = []
//       for (let i = store.verseStart; i < store.verseEnd + 1; i++) {
//         const verse = await getVerse({
//           translation: 'web',
//           book: store.book,
//           chapter: store.chapter,
//           verse: i,
//         })
//         const el: LineElement = {
//           id: '',
//           vloc: {
//             translation: store.translation,
//             book: store.book,
//             chapter: store.chapter,
//             verse: i,
//           },
//           indent: 0,
//           verse: verse || '',
//           markdown: verse || '',
//         }
//         elements.push(el)
//       }
//       return elements
//     })
//
//     return fromPromise(p)
//   }
// }
//
// const instance: NoteStore = nonr(new NoteStore())
//
// export default instance
