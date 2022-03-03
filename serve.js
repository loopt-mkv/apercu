'use strict'

const servor = require('servor')
Promise.resolve()
  .then(async () => {
    const instance = await servor({
      root: 'src',
      reload: true,
    })
  })
  .catch((err) => {
    throw err
  })
