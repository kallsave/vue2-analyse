const rollup = require('rollup')
const buildMap = require('./config')

const TARGET = process.env.TARGET

const build = buildMap[TARGET]

const watcher = rollup.watch(build)
watcher.on('event', event => {
  console.log(event.code)
  if (event.code === 'END') {
    console.log('END')
  }
})
