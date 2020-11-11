/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    login: async function (req, res) {

        if (req.method == "GET") return res.view('user/login');
    
        if (!req.body.username || !req.body.password) return res.badRequest();
    
        var user = await User.findOne({ username: req.body.username });
    
        if (!user) return res.status(401).json("User not found");
    
        // if (user.password != req.body.password) 
        //     return res.status(401).json("Wrong Password");
        var match = await sails.bcrypt.compare(req.body.password, user.password);
        if (!match) return res.status(401).json("Wrong Password");

        // Reuse existing session 
        if (!req.session.username) {
            req.session.username = user.username;
            req.session.role = user.role; 
            return res.json(user);
        }
        
        // Start a new session for the new login user
        req.session.regenerate(function (err) {
    
            if (err) return res.serverError(err);
            req.session.role = user.role; 
            req.session.username = user.username;   
            return res.json(user);
        });
    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {
        
            if (err) return res.serverError(err);
            
            return res.redirect("/");        
        });
    },

    populate: async function (req, res) {

        // also change search by username rather than id!
        var user = await User.findOne({username:req.params.username}).populate("coupons");
    
        if (!user) return res.notFound();
    
        return res.json(user);
        //console.log(user);
        //return res.view('user/redeemed', { member: user});
    },

    redeemed: async function (req, res) {
        return res.view('user/redeemed');
    },
    
    add: async function (req, res) {

       
        var user=await User.findOne({username: req.params.username});  // using username to access DB
        if (!user) return res.status(404).json("User not found.");
        
        var thatCoupon = await Oolong.findOne(req.params.fk).populate("clients", {id: user.id});
      
        if (!thatCoupon) return res.status(404).json("Coupon not found.");
            
        if (thatCoupon.clients.length > 0)
            return res.status(409).json("Already added.");   // conflict
        
        // normal redeem
        if(thatCoupon.Quata>0 && user.coins>thatCoupon.Coins)
        {
            // update user coins 
            user.coins =user.coins - thatCoupon.Coins;
            await User.updateOne(user.id).set(user);
            // update coupons quata
            var restaurant= await Oolong.findOne(req.params.fk);
            restaurant.Quata =thatCoupon.Quata-1;
            await Oolong.updateOne(restaurant.id).set(restaurant);
            // add association    
            await User.addToCollection(user.id, "coupons").members(req.params.fk);
        
            return res.ok();

        } 
        else// Quata not enough or member do not have enough coins
        {
            return res.status(409).json("haven't enough coins or quata");   // conflict
        }


    },

    // remove: async function (req, res) {

    //     if (!await User.findOne(req.params.id)) return res.status(404).json("User not found.");
        
    //     var thatPerson = await Person.findOne(req.params.fk).populate("consultants", {id: req.params.id});
        
    //     if (!thatPerson) return res.status(404).json("Person not found.");
    
    //     if (thatPerson.consultants.length == 0)
    //         return res.status(409).json("Nothing to delete.");    // conflict
    
    //     await User.removeFromCollection(req.params.id, "clients").members(req.params.fk);
    
    //     return res.ok();
    // },

};

