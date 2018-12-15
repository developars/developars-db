'use strict'

const db = require('../db')
const Profile = require('../profile')

describe('Testing profile model', () => {
  let profile = null
  beforeEach(() => {
    profile = new Profile(db)
  })

  test('Methods on profile should be defined', async () => {
    // const profile = new Profile(db)
    expect(profile).toBeDefined()
    expect(profile.create).toBeDefined()
    expect(profile.getAll).toBeDefined()
    expect(profile.get).toBeDefined()
    expect(profile.foo).not.toBeDefined()
  })
  
  test('Profile#create', async () => {
    const data = {
      name: 'User test',
      company: 'Inc'
    }
    // const profile = new Profile(db)
    const ref = await profile.create(data)
    expect(ref.id).not.toBeNull()
    expect(db.collection.get).toBeCalled()
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
    // const profile = new Profile(db)
    
    await profile.create(data1),
    await profile.create(data2)
    
    const result = await profile.getAll()
    expect(result).toBeDefined()
  })
  
  test('Profile#get', async () => {
    const data = {
      name: 'User test',
      company: 'Inc'
    }
    // const profile = new Profile(db)
    const ref = await profile.create(data)
    const result = await profile.get(ref.id)
    expect(result).toBeDefined()
  })
})
