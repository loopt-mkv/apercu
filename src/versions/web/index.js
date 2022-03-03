// @flow

import type { Book } from '../../types/Book.js'
import type { BookWeb } from './types.js'
import { out as index } from './_web.js'

type Normalized = {
  [Book]: ?{
    [number]: ?{
      [number]: ?string,
    },
  },
}

const normalized: Normalized = {}

async function normalize() {
  for (const bookKey of Object.keys(index)) {
    const book: BookWeb = await index[bookKey]()

    // $FlowFixMe
    if (!normalized[bookKey]) {
      // $FlowFixMe
      normalized[bookKey] = {}
    }

    // $FlowFixMe
    for (const lineElement of book) {
      if (
        !!lineElement.verseNumber &&
        !!lineElement.chapterNumber &&
        !!lineElement.value
      ) {
        // $FlowFixMe
        if (!normalized[bookKey]?.[lineElement.chapterNumber]) {
          // $FlowFixMe
          normalized[bookKey][lineElement.chapterNumber] = {}
        }

        // $FlowFixMe
        normalized[bookKey][lineElement.chapterNumber][
          // $FlowFixMe
          lineElement.verseNumber
        ] =
          // $FlowFixMe
          lineElement.value
      }
    }
  }
}

export async function getNormalized(): Promise<Normalized> {
  const uninitialized = JSON.stringify(normalized) === '{}'
  if (uninitialized) {
    await normalize()
      .catch((err) => {
        console.error(err)
      })
      .then(() => {
        console.log('normalized')
      })
  }
  return normalized
}

/*

- paragraph start
- paragraph end
- footnote marker
- stanza start
- stanza end
- break
- section header


* */

// const schema = {
//   'paragraph start': { type: 'paragraph start' },
//   'paragraph text': {
//     type: 'paragraph text',
//     chapterNumber: 3,
//     verseNumber: 20,
//     sectionNumber: 1,
//     value:
//       '',
//   },
//   'paragraph end': { type: 'paragraph end' },
//   'stanza start': { type: 'stanza start' },
//   'line text': {
//     type: 'line text',
//     chapterNumber: 13,
//     verseNumber: 9,
//     sectionNumber: 6,
//     value: 'and they will say, ‘Yahweh is my God.’ ” ',
//   },
//   'line break': { type: 'line break' },
//   'stanza end': { type: 'stanza end' },
//   break: { type: 'break' },
//   header: {
//     type: 'header',
//     value:
//       '',
//   },
// }
