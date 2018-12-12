'use strict'

const firebase = require('@firebase/testing')
const app = firebase.initializeAdminApp({ projectId: 'developars-club' })

const fail = app.firestore().collection('profiles').doc('xxx').get()
const succeed = app.firestore().collection('profiles').doc('52uis4Cj7RKspvCw13iG').get()

firebase.assertFails(fail)
  .then(() => {
    firebase.assertSucceeds(succeed)
  })
  .then(() => {
    console.log('Both test succeeded')
  })
  .catch((err) => {
    console.log('Test failed!', err)
  })
