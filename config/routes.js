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
 //'POST /oolong/create': 'OolongController.create',
 'POST /oolong': 'OolongController.create',

 'GET /': 'OolongController.home', // visit :1337 by GET home.js, not view, 1016
 'GET /oolong/home': 'OolongController.home',
 'POST /oolong/home': 'OolongController.home',

 'GET /oolong': 'OolongController.admin',
 'GET /oolong/admin': 'OolongController.admin',

 'GET /oolong/json': 'OolongController.json',

 'GET /oolong/update/:id': 'OolongController.update',
 //'POST /oolong/update/:id': 'OolongController.update',
 'PUT /oolong/:id': 'OolongController.update',

 //'POST /oolong/delete/:id': 'OolongController.delete', // all access DB just using POST
 'DELETE /oolong/:id': 'OolongController.delete',

 //'GET /oolong/detail/:id': 'OolongController.detail',
 'GET /oolong/:id': 'OolongController.detail',

 'POST /oolong/search': 'OolongController.search',
 'GET /oolong/search': 'OolongController.search',
 //'GET /oolong/paginate': 'OolongController.search'

  //Login/out
  'GET /user': 'UserController.login',
  'GET /user/login': 'UserController.login',
  'POST /user/login': 'UserController.login',
  'POST /user/logout': 'UserController.logout',
  'GET /user/logout': 'UserController.logout',
  //Association
  'GET /oolong/:id/clients': 'OolongController.populate',
  'GET /user/:username/coupons': 'UserController.populate',
  'POST /user/:username/coupons/add/:fk': 'UserController.add',  // using username replace id
  'POST /user/:username/coupons/remove/:fk': 'UserController.remove',

  'GET /user/redeemed': 'UserController.redeemed',
  'GET /oolong/redeemedM/:id': 'OolongController.redeemedM',
};
