/**
 * OolongController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    // action - create
    create: async function (req, res) {

        if (req.method == "GET") return res.view('oolong/create');
        
        var oolong = await Oolong.create(req.body).fetch();

        return res.status(201).json({ id: oolong.id });
    },
    // index page by create action
    index : async function (req, res) {

        if (req.method == "GET") return res.view('oolong/index');
        
        var oolong = await Oolong.create(req.body).fetch();
    
        return res.status(201).json({ id: oolong.id });
    },

};

