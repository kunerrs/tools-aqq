'use strict'


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('auth.login')
// Route.post('/login', 'AuthController.login')
Route.post('/users', 'UserController.store').validator('CreateUser')

Route.on('/signup').render('auth.signup')
Route.on('/login').render('auth.login')

Route.get('/image', 'UploadImageController.index').middleware('auth')
Route.get('/parser', 'ParserController.index').middleware('auth')
Route.get('/coord', 'CoordController.index').middleware('auth')

Route.post('/locate', 'CoordController.locate')
Route.post('/upload-image', 'UploadImageController.store')
Route.post('/login', 'UserController.login').validator('LoginUser')

Route.get('/logout', async ({ auth , response }) => {
    await auth.logout()
    return response.redirect('/')
})

Route.any('*', ({view}) => view.render('404'))

//TODO: Auth https://legacy.adonisjs.com/docs/4.0/authentication
//TODO: Login via qq creds - u need bcrypt to compare password