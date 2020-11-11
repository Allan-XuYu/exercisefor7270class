/**
 * Oolong.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    Restaurant: {
      type: "string",
      required: true
    },
    
    Title: {
      type: "string",
      required: true
    },

    Region: {
      type: "string",
      required: true
    },
    
    Mall: {
      type: "string",
      required: true
    },
    Image: {
      type: "string",
      required: true
    },
    
    Quata: {
      type: "number",
      required: true
    },

    Coins: {
      type: "number",
      required: true
    },

    Deal_Valid_Till: {
      type: "string",
      columnType:'date',
      required: true
    },
    
    Detail: {
      type: "string",
      required: true
    },
    
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    clients: {
      collection: 'User',
      via: 'coupons'
    }
  },

};

