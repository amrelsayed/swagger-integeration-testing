'use strict';


/**
 * Create new user
 *
 * body Body_1 
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
 * Update an existing user
 *
 * body Body  (optional)
 * no response value expected for this operation
 **/
exports.updateUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
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

