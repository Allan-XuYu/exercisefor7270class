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
    home : async function (req, res) {

        var restaurants = await Oolong.find(); // return the whole record
        if (!restaurants) return res.notFound();

        //var KowloonINFO={Title1:'',Detail1:'',Title2:'',Detail2:''};
        var INFO={KW_Detail1:'',KW_Detail2:'',KW_Coins1:'',KW_Coins2:'',KW_Image1:'',KW_Image2:'',KW_Restaurant1:'',KW_Restaurant2:'',KW_ID1:'',KW_ID2:'',
        HK_Detail1:'',HK_Detail2:'',HK_Coins1:'',HK_Coins2:'',HK_Image1:'',HK_Image2:'',HK_Restaurant1:'',HK_Restaurant2:'',HK_ID1:'',HK_ID2:'',
        NT_Detail1:'',NT_Detail2:'',NT_Coins1:'',NT_Coins2:'',NT_Image1:'',NT_Image2:'',NT_Restaurant1:'',NT_Restaurant2:'',NT_ID1:'',NT_ID2:''};
        
        var KowloonNew1=0,KowloonNew2=0;
        var IslandNew1=0,IslandNew2=0;
        var TerritoriesNew1=0,TerritoriesNew2=0;

        restaurants.forEach( function(Restaurant){
            
            if(Restaurant.Region == 'HK Island')
            {
                if(IslandNew2 < Restaurant.createdAt) // New1 is newest, New2 is second new
                {
                     if(IslandNew1 < Restaurant.createdAt)
                     {
                         // transfor New1 data to New2
                         IslandNew2=IslandNew1;
                         INFO.HK_Restaurant2 = INFO.HK_Restaurant1;
                         INFO.HK_Detail2 = INFO.HK_Detail1;
                         INFO.HK_Coins2=INFO.HK_Coins1;
                         INFO.HK_Image2=INFO.HK_Image1;
                         INFO.HK_ID2=INFO.HK_ID1;
 
                         IslandNew1=Restaurant.createdAt; 
                         // Set Newest
                         INFO.HK_Restaurant1 = Restaurant.Restaurant;
                         INFO.HK_Detail1 = Restaurant.Detail;
                         INFO.HK_Coins1= Restaurant.Coins;
                         INFO.HK_Image1= Restaurant.Image;
                         INFO.HK_ID1= Restaurant.id;
                     }else
                     {
                         
                        IslandNew2=Restaurant.createdAt;
                         // Set Second Newest
                         INFO.HK_Restaurant2 = Restaurant.Restaurant;
                         INFO.HK_Detail2 = Restaurant.Detail;  
                         INFO.HK_Coins2=Restaurant.Coins;
                         INFO.HK_Image2= Restaurant.Image; 
                         INFO.HK_ID2= Restaurant.id;     
                     }
                 }
             
               
            }else if(Restaurant.Region == 'Kowloon')
            {
                 
               if(KowloonNew2 < Restaurant.createdAt) // New1 is newest, New2 is second new
               {
                    if(KowloonNew1 < Restaurant.createdAt)
                    {
                        // transfor New1 data to New2
                        KowloonNew2=KowloonNew1;
                        INFO.KW_Restaurant2 = INFO.KW_Restaurant1;
                        INFO.KW_Detail2 = INFO.KW_Detail1;
                        INFO.KW_Coins2=INFO.KW_Coins1;
                        INFO.KW_Image2=INFO.KW_Image1;
                        INFO.KW_ID2=INFO.KW_ID1;

                        KowloonNew1=Restaurant.createdAt; 
                        // Set Newest
                        INFO.KW_Restaurant1 = Restaurant.Restaurant;
                        INFO.KW_Detail1 = Restaurant.Detail;
                        INFO.KW_Coins1= Restaurant.Coins;
                        INFO.KW_Image1= Restaurant.Image;
                        INFO.KW_ID1= Restaurant.id;
                    }else
                    {
                        
                        KowloonNew2=Restaurant.createdAt;
                        // Set Second Newest
                        INFO.KW_Restaurant2 = Restaurant.Restaurant;
                        INFO.KW_Detail2 = Restaurant.Detail;  
                        INFO.KW_Coins2=Restaurant.Coins;
                        INFO.KW_Image2= Restaurant.Image; 
                        INFO.KW_ID2= Restaurant.id;     
                    }
                }

            }else  if(Restaurant.Region == 'New Territories')
            {
                if(TerritoriesNew2 < Restaurant.createdAt) // New1 is newest, New2 is second new
                {
                     if(TerritoriesNew1 < Restaurant.createdAt)
                     {
                         // transfor New1 data to New2
                         TerritoriesNew2=TerritoriesNew1;
                         INFO.NT_Restaurant2 = INFO.NT_Restaurant1;
                         INFO.NT_Detail2 = INFO.NT_Detail1;
                         INFO.NT_Coins2=INFO.NT_Coins1;
                         INFO.NT_Image2=INFO.NT_Image1;
                         INFO.NT_ID2=INFO.NT_ID1;
 
                         TerritoriesNew1=Restaurant.createdAt; 
                         // Set Newest
                         INFO.NT_Restaurant1 = Restaurant.Restaurant;
                         INFO.NT_Detail1 = Restaurant.Detail;
                         INFO.NT_Coins1= Restaurant.Coins;
                         INFO.NT_Image1= Restaurant.Image;
                         INFO.NT_ID1= Restaurant.id;
                     }else
                     {
                         
                        TerritoriesNew2=Restaurant.createdAt;
                         // Set Second Newest
                         INFO.NT_Restaurant2 = Restaurant.Restaurant;
                         INFO.NT_Detail2 = Restaurant.Detail;  
                         INFO.NT_Coins2=Restaurant.Coins;
                         INFO.NT_Image2= Restaurant.Image; 
                         INFO.NT_ID2= Restaurant.id;     
                     }
                 }
                
            }else
            {console.log('Region error');}
           
        }); 
        
       // console.log(INFO); // for debug
        return res.view('oolong/home', { INFO_toHomeP: INFO}); 
        
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


    // detail page, same return with update page
    detail: async function (req, res) {

            var thatInfo = await Oolong.findOne(req.params.id); // return a single record by id

            if (!thatInfo) return res.notFound(); // no that record, break function return status

            return res.view('oolong/detail', { info: thatInfo });// return page with Oject info, .view handle render

    },

    // action - paginate
    // paginate: async function (req, res) {

    //     var limit = Math.max(req.query.limit, 2) || 2; // num of ojects
    //     var offset = Math.max(req.query.offset, 0) || 0; // start point

    //     var somePersons = await Oolong.find({  // find from DB
    //         limit: limit, //
    //         skip: offset  //
    //     });

    //     var count = await Oolong.count();

    //     return res.view('oolong/paginate', { infos: somePersons, numOfRecords: count });// all record
    // },

    // Search result
    Search: async function (req, res) {

        var whereClause = {};//matching object
        
        if ((req.query.Region)&&(req.query.Region!="Not Specified")) whereClause.Region = { contains: req.query.Region };
        if (req.query.Deal_Valid_Till) whereClause.Deal_Valid_Till = {'>=': req.query.Deal_Valid_Till };
        // Coins interval
        if(req.query.MinCoins)
        {
            var parsedMinCoins = parseInt(req.query.MinCoins);
            if (!isNaN(parsedMinCoins)) whereClause.Coins = { '>=': req.query.MinCoins }; // if it's tru
        }
        if(req.query.MaxCoins)
        {
        var parsedMaxCoins = parseInt(req.query.MaxCoins);
        if (!isNaN(parsedMaxCoins)) whereClause.Coins = { '<=': req.query.MaxCoins }; // if it's true , bulabula...
        }

        var limit = Math.max(req.query.limit, 2) || 2; // num of ojects
        var offset = Math.max(req.query.offset, 0) || 0;
        var thoseinfos = await Oolong.find({
            where: whereClause, //dynamic  not use {name:"xxx",age:20}
            limit: limit, // display two record
            skip: offset,
            sort: 'createdAt DESC' // ordinal , + DESC to switch
        });
        // for count all search result
        var CountRecord = await Oolong.find({
            where: whereClause, //dynamic  not use {name:"xxx",age:20}
        });
       // console.log(thoseinfos);// for debug
       // console.log(CountRecord.length);// for debug

        //res.view('oolong/search',{infos: thoseinfos, numOfRecords: thoseinfos.length });
        res.view('oolong/paginate', { infos: thoseinfos, numOfRecords: CountRecord.length });
    },

};

