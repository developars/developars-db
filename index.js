'use strict'

const db = require('./lib/db')
const Profile = require('./lib/profile')

module.exports = {
  profile: new Profile(db)
}
