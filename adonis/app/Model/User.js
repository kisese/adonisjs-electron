'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
	  apiTokens () {
    return this.hasMany('App/Model/Token')
  }
}

module.exports = User
