// @flow

// Types of line elements:
// Paragraph (range of verses.)
// Line Breaks
// Verses with new lines inside. (stanzas)
// Section Headers
//

type VerseLocation = {
  translation: string,
  book: string,
  chapter: number,
  verse: number
}

export type LineElement = {
  id: string,
  vloc: VerseLocation,
  indent: number,
  verse: string, // same as markdown, but without anchors.
  markdown: string, // includes anchors and new lines.
  // footnote anchors {a} {b}
  // comment anchors <aaaaa> <aaaaabb>
}

type Anchor = {
  // footnote anchors [a], [b], ... [z], [aa], [ab], ..., [zz], ..., [zzz]
  // comment anchors {ae58bdc}
  id: string, // id appears in markdown.
  vloc: VerseLocation,
  markdown: string
}

// Data to client:
/*
Line elements (contains anchors which are IDs to the footnote/comment)
footnotes
comments
* */