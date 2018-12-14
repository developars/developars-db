'use strict'

const Profile = require('../models/profiles')
const { dbStub } = require('./helpers')

test('Profile Model', async () => {
  let profile = new Profile(dbStub)
  expect(profile).toBeDefined()
  expect(profile.create).toBeDefined()
  expect(profile.getAll).toBeDefined()
  expect(profile.get).toBeDefined()
})