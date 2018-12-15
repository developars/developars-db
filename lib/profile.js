'use strict'

class Profile {
  constructor (db) {
    this.db = db
    this.collection = db.collection('profiles')
  }

  async create (data) {
    let ref
    try {
      ref = await this.collection.add({
        createdAt: Date.now(),
        ...data
      })
    } catch (err) {
      throw new Error(err.message)
    }

    return ref.id
  }

  async getAll () {
    let snapshot
    try {
      snapshot = await this.collection.get()
    } catch (err) {
      throw new Error(err.message)
    }

    if (snapshot.empty) {
      return 'No matching documents.'
    }

    let result = new Map()
    snapshot.forEach(doc => {
      result[doc] = doc.data()
    })

    return result
  }

  async get (id) {
    let doc
    try {
      doc = await this.collection.doc(id).get()
    } catch (err) {
      throw new Error(err.message)
    }

    if (!doc.exists) {
      return 'No such document'
    }

    return doc.data()
  }
}

module.exports = Profile
