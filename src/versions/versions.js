// @flow

import type { Book } from '../types/Book.js'
import type { Translation } from '../types/Translation.js'

import { getNormalized } from './web/index.js'
// import { out } from './web/_web.js'

export async function getVerse(input: {
  translation: Translation,
  book: Book,
  chapter: number,
  verse: number,
}): Promise<?string> {
  const { translation, book, chapter, verse } = input

  console.log('book', book)
  console.log('chapter', chapter)
  console.log('verse', verse)

  const web = await getNormalized()
  const value = web[book]?.[chapter]?.[verse]

  console.log('value', value)

  return value
}

export function getFootnote(input: {
  translation: string,
  book: string,
  chapter: number,
  verse: number,
}) {}
