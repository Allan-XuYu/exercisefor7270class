/**
 * OolongController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // create new restaurant
    create: async function (req, res) {

        if (req.method == "GET") return res.view('oolong/create');
        
        var oolong = await Oolong.create(req.body).fetch();

        return res.status(201).json({ id: oolong.id });
    },
    // Homepage page by create action
    index : async function (req, res) {

        if (req.method == "GET") return res.view('oolong/index');
        
        var oolong = await Oolong.create(req.body).fetch();
    
        return res.status(201).json({ id: oolong.id });
    },
    // json function
    json: async function (req, res) {

        var everyones = await Oolong.find();

        return res.json(everyones);
    },

    // action - list for admin page
    admin: async function (req, res) {

        var restaurants = await Oolong.find();
        
        return res.view('oolong/admin', { infos: restaurants });
    },
};

