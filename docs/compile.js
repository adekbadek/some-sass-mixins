const path = require('path')
const fs = require('fs')
const pug = require('pug')

const IN_FILE_NAME = 'index.pug'
const OUT_FILE_NAME = 'index.html'
const INDEX_FILE = path.join(__dirname, IN_FILE_NAME)
const OUTPUT_FILE = path.join(__dirname, OUT_FILE_NAME)

const compile = () => {
  const { version, name, description } = require(path.join(__dirname, '../package.json'))

  const compiledFile = pug.renderFile(INDEX_FILE, {
    version, name, description
  })
  fs.writeFileSync(OUTPUT_FILE, compiledFile)
  console.log(`
    compiled ${IN_FILE_NAME} to ${OUT_FILE_NAME} 🏄
  `)
}

compile()

if (process.argv[2] === 'watch') {
  fs.watch(INDEX_FILE, { encoding: 'utf8' }, (eventType, filename) => {
    if (eventType === 'change' && filename) {
      compile()
    }
  })
}
