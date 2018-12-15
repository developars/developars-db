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
      return err
    }

    return ref.id
  }

  async getAll () {
    let snapshot
    try {
      snapshot = await this.collection.get()
    } catch (err) {
      return err
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
      let ref = await this.collection.doc(id)
      doc = await ref.get()
    } catch (err) {
      return err
    }

    if (!doc.exists) {
      return 'No such document'
    }

    return doc.data()
  }
}

module.exports = Profile
