// @flow

import type { Translation } from '../types/Translation.js'
import type { Book } from '../types/Book.js'
import type { LineElement } from '../types/LineElement.js'
import { mobx } from '../unpkg.js'
import { fromPromise } from 'mobx-utils'

import { getVerse } from '../versions/versions.js'
import type { MobxPromise } from '../types/MobxPromise.js'

const { makeObservable, observable, action, observe, computed } = mobx

export class NoteStore {
  translation: Translation
  book: Book
  chapter: number
  verseStart: number
  verseEnd: number

  constructor() {
    this.translation = 'web'
    this.book = 'genesis'
    this.chapter = 1
    this.verseStart = 1
    this.verseEnd = 4

    makeObservable(this, {
      translation: observable,
      book: observable,
      chapter: observable,
      verseStart: observable,
      verseEnd: observable,
      lineElements: computed,
    })
  }

  get lineElements(): Array<LineElement> {
    return this._lineElements.value
  }

  get _lineElements(): MobxPromise<Array<LineElement>> {
    const p = Promise.resolve().then(async () => {
      const elements: Array<LineElement> = []
      for (let i = this.verseStart; i < this.verseEnd + 1; i++) {
        const verse = await getVerse({
          translation: 'web',
          book: this.book,
          chapter: this.chapter,
          verse: i,
        })
        const el: LineElement = {
          id: '',
          vloc: {
            translation: this.translation,
            book: this.book,
            chapter: this.chapter,
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

    return fromPromise(p)
  }
}

const instance: NoteStore = new NoteStore()

export default instance
