'use strict'

const User = use('App/Model/User')
const Hash = use('Hash')

class RegisterController {
   * index(request, response) {
        yield response.sendView('register')
    }

    * doRegister(request, response) {
        const user = new User()
        user.username = request.input('name')
        user.email = request.input('email')
        user.password = yield Hash.make(request.input('password'))

        yield user.save()

        var registerMessage = {
            success: 'Registration Successful! Now go ahead and login'
        }

        yield response.sendView('register', { registerMessage : registerMessage })
    }
}

module.exports = RegisterController
