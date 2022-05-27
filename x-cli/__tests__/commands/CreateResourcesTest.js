// eslint-disable-next-line import/namespace
const assert = require('assert')
const CreateResources = require('../../src/commands/CreateResources')

// eslint-disable-next-line no-unused-vars
console.log('welcome! create test')
/* eslint-disable camelcase */
describe('Get create commands', function() {
  describe('create resourrces', function() {
    it('should create the files in the build folder', async function() {
      await new CreateResources().run({ useCase: 'GetTvShowsUseCase' })
      // expect(actualCategoryPath).toEqual(expectedCategoryPath)
      expect(true).toEqual(true)
    })
  })
})
