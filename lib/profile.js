'use strict'

class Profile {
  constructor (db) {
    this.db = db
    this.collection = db.collection('profiles')
  }

  create (data) {
    return this.collection
      .add({
        createdAt: Date.now(),
        ...data
      })
      .then(ref => ref.id)
      .catch(err => err.message)
  }

  getAll () {
    return this.collection
      .get()
      .then(snapshot => {
        let result = new Map()
        if (snapshot.empty) {
          return 'No matching documents.'
        }

        snapshot.forEach(doc => {
          result[doc] = doc.data()
        })

        return result
      })
      .catch(err => err.message)
  }

  get (id) {
    return this.collection
      .doc(id)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document')
        }

        return doc.data()
      })
      .catch(err => err.message)
  }
}

module.exports = Profile
