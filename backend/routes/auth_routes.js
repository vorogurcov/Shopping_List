const express = require("express");

const authRoute = new express.Router();

authRoute.post("/register", (req, res) => {
    console.log(req.body); // Log the request body
    res.status(200).json({ message: "Registration successful" }); // Return JSON response
});

authRoute.post("/signup", (req,res) =>{

    if(req.body.Email == 'ya@a.ru'){
        res.status(200).json({message: "All good!"});
        console.log("All good!");
    }

    else
        res.status(2000).json({message: "Everything bad!"});

})

module.exports = authRoute;