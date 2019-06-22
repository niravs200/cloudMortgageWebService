/**
 * UserManagment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    Name : {
      type : "string",
      required:true
    },
    
    Email: {
      type : "string",
      required:true,
      unique:true
    },

    Password: {
      type : "string",
      required:true
    },

    Address: {
      type : "string",
      required:true
    },

    Phone_Number: {
      type : "number",
      required:true
    },

    Company_Name: {
      type : "string",
      required:true
    },

    Status: {
      type : "string",
      required:true
    },
  },

};

