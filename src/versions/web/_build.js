// @flow

/*
This file is to be ran as a local dev. Not in production.
* */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// $FlowFixMe
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const jsonPath = path.resolve(
  process.cwd(), // the directory where node was executed.
  'node_modules/world-english-bible/json'
)
const files = fs.readdirSync(jsonPath)

const template = (filename) => {
  const basename = path.basename(filename, '.json')
  return `import _${basename} from '../../data/web/js/${basename}.js'`
}

function getBookName(filename) {
  const basename = path.basename(filename, '.json')
  if (basename === 'songofsolomon') {
    return 'song_of_solomon'
  }
  if (/^\d/.test(basename)) {
    return `${basename[0]}_${basename.slice(1)}`
  }
  return basename
}

const exportStatements = files.map((filename) => {
  const basename = path.basename(filename, '.json')
  const capped = basename[0].toUpperCase() + basename.slice(1)
  return `'${getBookName(filename)}': get${capped},`
})

const resolvers = files.map((filename) => {
  const basename = path.basename(filename, '.json')
  const capped = basename[0].toUpperCase() + basename.slice(1)
  return `
    async function get${capped}(): Promise<BookWeb> {
      return import('../../data/web/js/${basename}.js').then((m) => (m.default))
    }
  `
})

/*

import type {BookWeb} from './types.js'
import type {Book} from '../../types/Book.js'

${resolvers.join('\n')}

export const out: {[Book]: () => Promise<BookWeb>} = {
  ${exportStatements.join('\n  ')}
}

* */

let contents = `// @flow
import type {BookWeb} from './types.js'
import type {Book} from '../../types/Book.js'

${resolvers.join('\n')}

export const out: {[Book]: () => Promise<BookWeb>} = {
  ${exportStatements.join('\n  ')}
}
`

fs.writeFileSync(path.resolve(__dirname, '_web.js'), contents, {
  encoding: 'utf-8',
})
