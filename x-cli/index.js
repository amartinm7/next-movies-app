#! /usr/bin/env node
const console = require('console')
const mason = require('commander')

const chalk = require('chalk')
const { version } = require('./package.json')
// eslint-disable-next-line no-unused-vars
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const info = chalk.keyword('cyan')

// commands, add as many as you wish
const CreateResources = require('./src/commands/CreateResources')

mason.version(version)

mason
  .command('create usecase <useCase>')
  .description('creates a new usecase')
  .action((useCase) => {
    console.log(info('creating usecase... %s'), useCase)
    new CreateResources().run({ useCase })
  })

mason.command('*').action(() => {
  mason.help()
})

mason.parse(process.argv)

if (!mason.args.length) {
  console.log(
    warning('Please, read the instruccions before keep on working...')
  )
  mason.help()
}
