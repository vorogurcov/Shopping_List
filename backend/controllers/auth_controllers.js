const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const pool = require("../config/db.js");
const jwt = require('jsonwebtoken')
const secret_key = require("../config/jwt_secret_key.js")

exports.register_user = asyncHandler(async (req, res) => {
    try {
        let values = Object.values(req.body);

        const query = {
            text: 'INSERT INTO users(user_name, user_last_name, user_email, user_password) VALUES($1, $2, $3, $4)',
            values: values,
        };

        const result = await pool.query(query);

        res.status(200).json(
            {
                message: "Registration successful",
                redirect: 'authorization_page.html',
            });
    } catch (error) {
        console.log("Error during user registration:", error.message);
        res.status(500).json(
            {
            message: "Internal Server Error",
            });
    }
});

exports.signup_user = asyncHandler(async (req, res) => {
    try {

        let values = Object.values(req.body)


        const query = {
            text: 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2',
            values: values,
        };

        const result = await pool.query(query);

        if (result.rows.length > 0) {
            //let jwt_token = jwt.sign({active:true},secret_key, {expiresIn:86400})
            let jwt_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3RpdmUiOnRydWUsImlhdCI6MTczNDYwMjIwNywiZXhwIjoxNzM0Njg4NjA3fQ.FkvCJAiLXD7XwolFOkJYLcxYvaV6jlf8uRAiG5wnhsY';
            res.cookie('jwtToken',jwt_token, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',
                maxAge: 24 * 60 * 60 * 1000
            })
            res.status(200).json({ message: "User exists",redirect:'/pages/main_page.html'});
        } else {
            res.status(400).json({ message: "User does not exist!" });
        }
    } catch (error) {
        console.error("Database query error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});