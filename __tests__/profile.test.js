'use strict'

const Profile = require('../models/profiles')

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
    where: jest.fn(() => {
      return {
        get: jest.fn(() => Promise.resolve(true)),
        onSnapshot: jest.fn(() => Promise.resolve(true))
      }
    })
  }
})

const firestore = () => {
  return {
    collection
  }
}

const admin = {}
admin.firestore = firestore

// Tests
test('Database', async () => {
  const db = admin.firestore()
  expect(db).toBeDefined()
})

test('Profile', async () => {

})
