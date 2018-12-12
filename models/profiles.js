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
      .then(ref => console.log(`Profile added with ID: ${ref.id}`))
      .catch(err => console.error('Something wrong happened', err))
  }

  getAll () {
    return this.collection
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          console.log('No matching documents.')
          return
        }

        snapshot.forEach(doc => {
          console.log(doc.id, ':', doc.data())
        })
      })
      .catch(err => console.log('Error getting documents', err))
  }

  get (id) {
    return this.collection
      .doc(id)
      .get()
      .then(doc => {
        if (!doc.exists) {
          console.log('No such document')
        } else {
          console.log('Document data:', doc.data())
        }
      })
      .catch(err => console.log('Error getting document', err))
  }
}

module.exports = Profile
