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

    // Admin page - list for admin page
    admin: async function (req, res) {

        var restaurants = await Oolong.find(); // return the whole record
        
        return res.view('oolong/admin', { infos: restaurants }); 
    },

    // update page
    update: async function (req, res) {

        if (req.method == "GET") {//click update from admin page to here through /routes.js

            var thatInfo = await Oolong.findOne(req.params.id); // return a single record by id

            if (!thatInfo) return res.notFound(); // no that record, break function return status

            return res.view('oolong/update', { info: thatInfo });// return page with Oject info, .view handle render
            
        } else {
            
            var updatedInfo = await Oolong.updateOne(req.params.id).set(req.body);

            if (!updatedInfo) return res.notFound();

            return res.ok();
        }
    },

    // delete action from Update page 
    delete: async function (req, res) {

        var deletedInfo = await Oolong.destroyOne(req.params.id);

        if (!deletedInfo) return res.notFound();

        return res.ok(); 
    },

};

