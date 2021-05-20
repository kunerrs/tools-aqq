'use strict'

class UploadImageController {
    async index({request, response ,view}) {
        return view.render('image')
    }

    async store(){
        
    }
}

module.exports = UploadImageController
