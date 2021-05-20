'use strict'

class ParserController {
    async index({ request , response , view}) {

        return view.render('parser')
    }

}

module.exports = ParserController
