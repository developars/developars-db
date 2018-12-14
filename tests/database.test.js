'use strict'

const { dbStub } = require('./helpers')

// Tests
test('Database', async () => {
  expect(dbStub).toBeDefined()
})