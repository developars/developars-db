'use strict'

const db = require('../lib/db')
const Profile = require('../lib/profile')

test('Profile Model', async () => {
  const profile = new Profile(db)
  expect(profile).toBeDefined()
  expect(profile.create).toBeDefined()
  expect(profile.getAll).toBeDefined()
  expect(profile.get).toBeDefined()
})

test('Profile#create', async () => {
  const data = {
    name: 'User test',
    company: 'Inc'
  }
  const profile = new Profile(db)
  profile.create(data).then(ref => {
    expect(ref.id).not.toBeNull()
  })
})

test('Profile#getAll', async () => {
  const data1 = {
    name: 'User test',
    company: 'Inc'
  }
  const data2 = {
    name: 'User test #2',
    company: 'Inc'
  }
  const profile = new Profile(db)
  let promises = [
    profile.create(data1),
    profile.create(data2)
  ]
  Promise.all(promises).then(() => {
    profile.getAll().then(result => {
      expect(result).toBeDefined()
    })
  })
})

test('Profile#get', async () => {
  const data = {
    name: 'User test',
    company: 'Inc'
  }
  const profile = new Profile(db)
  profile.create(data).then(ref => {
    profile.get(ref.id).then(data => {
      expect(data).toBeDefined()
    })
  })
})
