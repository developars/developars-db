'use strict'

const collection = jest.fn(() => {
  return {
    doc: jest.fn(() => {
      return {
        collection: collection,
        update: jest.fn(() => Promise.resolve(true)),
        onSnapshot: jest.fn(() => Promise.resolve(true)),
        get: jest.fn(() => Promise.resolve(true))
      }
    }),
    get: jest.fn(() => Promise.resolve(true)),
    add: jest.fn(() => Promise.resolve(true)),
    where: jest.fn(() => {
      return {
        get: jest.fn(() => Promise.resolve(true)),
        onSnapshot: jest.fn(() => Promise.resolve(true))
      }
    })
  }
})

const firestoreStub = jest.fn(() => {
  return {
    collection
  }
})

const adminStub = {
  firestoreStub
}

module.exports = {
  dbStub: adminStub.firestoreStub()
}
