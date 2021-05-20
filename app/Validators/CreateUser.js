'use strict'

class CreateUser {
  get rules () {
    return {
      'username' : 'required',
      'email' : 'required',
      'password' : 'required',
    }
  }

  get messages() {
    return {
      'required' : '{{ field }} is required',
      'unique' : '{{ field }} must be unique'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
      .flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = CreateUser
