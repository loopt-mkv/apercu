/*

Converts the data at data/web/json from a .json file to a .js file.

* */

import fs from 'fs'
import path from 'path'

const jsonPath = path.resolve('./src/data/web/json')
const jsPath = path.resolve('./src/data/web/js')

const filenames = fs.readdirSync(jsonPath)

for (const filename of filenames) {
  let contents = fs.readFileSync(path.resolve(jsonPath, filename), {
    encoding: 'utf-8',
  })
  contents = 'export default ' + contents
  const jsName = path.basename(filename, '.json') + '.js'
  fs.writeFileSync(path.resolve(jsPath, jsName), contents, {
    encoding: 'utf-8',
  })
}
