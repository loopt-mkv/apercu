import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

const changedFiles = process.argv.slice(2)

// todo: do not exit as soon as you see a bad file.
let error = false
for (const file of changedFiles) {
  let contents = fs.readFileSync(file, { encoding: 'utf-8' })

  contents = contents.replace(/(?:'|").*console\.log.*(?:'|")/g, '') // remove 'console.log' inside a string
  contents = contents.replace(/\/\/.*console\.log/g, '') // remove single line
  contents = contents.replace(
    /\/\*(?:(?:.|\n)(?!\*\/))*console\.log(?:(?:.|\n)(?!\*\/))*/g,
    ''
  ) // remove multiline

  // if any console.log statements remain, then they are not commented out.
  const lines = contents.match(/.*console\.log.*/g)

  if (lines) {
    console.warn(
      '\n' +
        chalk.bgYellow.bold(' console.log ') +
        ` found in ${chalk.yellow(`./${path.relative('.', file)}`)}.`
    )
    for (const line of lines) {
      const splits = line.trim().split('console.log')

      console.warn(
        '  ↳ ' +
          chalk.gray(splits[0]) +
          chalk.white('console.log') +
          chalk.grey(splits[1] ?? '')
      )
    }
    console.warn('')
    error = true
  }
}

if (error) {
  process.exit(1)
}
