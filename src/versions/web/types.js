// @flow

/*
const schema = {
  'paragraph start': { type: 'paragraph start' },
  'paragraph text': {
  type: 'paragraph text',
    chapterNumber: 3,
    verseNumber: 20,
    sectionNumber: 1,
    value: 'At that time I will bring you in, and at that time I will gather you; for I will give you honor and praise among all the peoples of the earth, when I restore your fortunes before your eyes, says Yahweh. '
},
  'paragraph end': { type: 'paragraph end' },
  'stanza start': { type: 'stanza start' },
  'line text': {
  type: 'line text',
    chapterNumber: 13,
    verseNumber: 9,
    sectionNumber: 6,
    value: 'and they will say, ‘Yahweh is my God.’ ” '
},
  'line break': { type: 'line break' },
  'stanza end': { type: 'stanza end' },
  break: { type: 'break' },
  header: {
    type: 'header',
      value: 'A praise psalm by David.* This is an acrostic psalm, with every verse (including the second half of verse 13) starting with a consecutive letter of the Hebrew alphabet.'
  }
}
* */

type WebParagraphStart = { type: 'paragraph start' }
type WebParagraphText = {
  type: 'paragraph text',
  chapterNumber: number,
  verseNumber: number,
  sectionNumber: number,
  value: string,
}
type WebParagraphEnd = { type: 'paragraph end' }
type WebStanzaStart = { type: 'stanza start' }
type WebLineText = {
  type: 'line text',
  chapterNumber: number,
  verseNumber: number,
  sectionNumber: number,
  value: string,
}
type WebBreak = { type: 'break' }
type WebHeader = { type: 'header', value: string }

type WebLineElement = WebParagraphStart | WebParagraphText | WebParagraphEnd | WebStanzaStart | WebLineText | WebBreak | WebHeader

export type BookWeb = Array<WebLineElement>
