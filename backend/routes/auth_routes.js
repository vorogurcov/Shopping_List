const express = require("express");
const auth_controllers = require("../controllers/auth_controllers.js")

const authRoute = new express.Router();

authRoute.post("/register",auth_controllers.register_user);

authRoute.post("/signup",auth_controllers.signup_user)

module.exports = authRoute;