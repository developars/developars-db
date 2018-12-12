'use strict'

const admin = require('firebase-admin')
const serviceAccount = require('./config/key.json')

const DATABASE_NAME = 'developars-club'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${DATABASE_NAME}.firebaseio.com`
})

const db = admin.firestore()

db.settings({ timestampsInSnapshots: true })

module.exports = db
