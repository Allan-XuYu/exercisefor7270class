/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'oolong/home' },// visit :1337 by GET home.js, not view , 1016


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

 'GET /oolong/create': 'OolongController.create',
 'POST /oolong/create': 'OolongController.create',

 'GET /': 'OolongController.home', // visit :1337 by GET home.js, not view, 1016
 'GET /oolong/home': 'OolongController.home',
 'POST /oolong/home': 'OolongController.home',

 'GET /oolong': 'OolongController.admin',
 'GET /oolong/admin': 'OolongController.admin',

 'GET /oolong/json': 'OolongController.json',

 'GET /oolong/update/:id': 'OolongController.update',
 'POST /oolong/update/:id': 'OolongController.update',

 'POST /oolong/delete/:id': 'OolongController.delete', // all access DB just using POST
 
 'GET /oolong/detail/:id': 'OolongController.detail',

};
