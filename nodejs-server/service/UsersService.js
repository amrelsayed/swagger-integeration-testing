'use strict';


/**
 * Add new user
 *
 * body Body 
 * no response value expected for this operation
 **/
exports.addUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete user
 *
 * id Integer User ID
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets a user by ID.
 *
 * id Integer User ID
 * returns User
 **/
exports.getUserById = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "name" : "name",
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Users List
 *
 * returns Object
 **/
exports.usersList = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 1,
  "name" : "Samir",
  "email" : "samir@gmail.com"
}, {
  "id" : 2,
  "name" : "Ahmed",
  "email" : "ahamed@gmail.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

