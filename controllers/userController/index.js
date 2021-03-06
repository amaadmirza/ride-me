const { User, Car, Owner, Booking, Bill, Customer } = require("../../models");
// ==============================================================
// IMPORTING USER CONTROLLER METHODS
// ==============================================================
const createUser = require("./createUser");
const getOneUser = require("./getOneUser");
const updateUser = require("./updateUser");

// ==============================================================
// USER CONTROLLER
// ==============================================================
module.exports = {
  // ====================================================================
  // @route   =>  '/api/users/'
  // @desc    =>  Create new user
  // @method  =>  POST
  // VALIDATION: PENDING
  // ----------------------------------------------------
  createUser,
  // ====================================================================
  // @route   =>  '/api/users/'
  // @method  =>  GET
  // @desc    =>  Show user profile
  // ----------------------------------------------------
  // VALIDATION: PENDING
  // ----------------------------------------------------
  getOneUser,
  updateUser
  // ====================================================================
};
