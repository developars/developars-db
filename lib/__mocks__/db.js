'use strict'

const mockData = require('../__fixtures__/profiles')

const db = {
  collection: () => {
    return {
      add: jest.fn(Promise.resolve({ ref: { id: 1 }})),
      get: jest.fn(Promise.resolve(mockData)),
      doc: jest.fn(() => {
        return {
          get: jest.fn(() => Promise.resolve(mockData[1]))
        }
      })
    }
  }
}

exports.db = db