
const asyncHandler = require("express-async-handler");
const pool = require("../config/db.js");

exports.get_products = asyncHandler(async (req,res) =>{
    try{
        let values = Object.values(req.body);
        const query = {
            text:'SELECT * FROM products LIMIT 4 OFFSET (4*$1)',
            values: values,
        }

        let result = await pool.query(query);
        res.status(200).json(result.rows)
    }
    catch(error)
    {
        console.log("Error during products taking:", error.message);
        res.status(500).json({ });
    }
});