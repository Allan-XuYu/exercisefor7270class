/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
  // if (await User.count() > 0) {
  //   return;
  // }
  //
  // await User.createEach([
  //   { emailAddress: 'ry@example.com', fullName: 'Ryan Dahl', },
  //   { emailAddress: 'rachael@example.com', fullName: 'Rachael Shaw', },
  //   // etc.
  // ]);
  // ```


  if (await Oolong.count() > 0) { 
    return;
  }
  
  await Oolong.createEach([
    { Title: "50%discount", Restaurant:'Haidilao',Region:'HK Island',Mall:'IFC Mall',Image:'http://129.204.236.214:8089/haidilao.jpeg',Quata:'600',Coins:'700',Deal_Valid_Till:'2020-12-31',Detail:'just feel free to eat hot poooooot'},
    { Title: "Roast Meat Buy one get one free", Restaurant:'ShaolaDian',Region:'HK Island',Mall:'Pacific Place',Image:'http://129.204.236.214:8089/shaola.jpg',Quata:'400',Coins:'600',Deal_Valid_Till:'2020-12-30',Detail:' Buy one get one free ! '},
    { Title: "$20 discount for $500", Restaurant:'Diandude',Region:'Kowloon',Mall:'Elements"',Image:'http://129.204.236.214:8089/diandude.jpg',Quata:'400',Coins:'500',Deal_Valid_Till:'2020-12-29',Detail:'Traditional Guangdong cuision'},
    { Title: "KFC Children's package with toys!", Restaurant:'KFC',Region:'Kowloon',Mall:'Harbour City',Image:'http://129.204.236.214:8089/kfc.jpg',Quata:'300',Coins:'500',Deal_Valid_Till:'2020-12-28',Detail:'Welcome to'},
    { Title: "30% Discount for family combo", Restaurant:'Seafood of Japanese cuisine',Region:'New Territories',Mall:'New Town Plaza',Image:'http://129.204.236.214:8089/japaneseSeafood.jpg',Quata:'400',Coins:'500',Deal_Valid_Till:'2020-12-27',Detail:'for family(over 4 people) '},
    { Title: "Public Holiday 20% discount for all food", Restaurant:'Tanyu',Region:'New Territories',Mall:'Tsuen Wan Plaza',Image:'http://129.204.236.214:8089/tanyu.jpeg',Quata:'400',Coins:'500',Deal_Valid_Till:'2020-12-26',Detail:'Student discount'},
    // etc.
  ]);
};
