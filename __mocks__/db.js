'use strict'

const mockData = {
  name: 'User test',
  company: 'Inc'
}

const mockId = 1

const collection = function (col) {
  return {
    add: function (mockData) {
      return Promise.resolve({ ref: { id: mockId } })
    },
    get: function (id) {
      return Promise.resolve({ id, ...mockData })
    },
    doc: Promise.resolve(true)
  }
}

const db = {
  collection
}

exports.db = db