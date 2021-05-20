'use strict'

const User = use('App/Models/User')

class UserController {
    async store({request, response}){
        const userData = request.only(['email', 'password', 'username'])
        const user = await User.create(userData)

       return response.created({
           status: true,
           data: user
       }).redirect('/login')
    }

    async login({request, auth , response, session}) {
        const { email , password } = request.all()
        try{
            await auth.attempt(email,password)
  
            return response.redirect('/image')
        } catch (error) {
            session.flash({loginError: 'Incorrect Email/Password.'})
            return response.redirect('/login')
        }
    }

}

module.exports = UserController
