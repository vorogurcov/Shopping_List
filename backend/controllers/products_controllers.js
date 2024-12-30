const asyncHandler = require("express-async-handler");
const pool = require("../config/db.js");

exports.get_products = asyncHandler(async (req,res) =>{
    try{

        let values = Object.values(req.body);
        let jwt_token = req.cookies.jwtToken;
        values.push(jwt_token);
        const query = {
            text:'SELECT * FROM users_to_products usp INNER JOIN users u on usp.user_id = u.user_id INNER JOIN products p on p.product_id = usp.product_id WHERE u.user_jwt_token = $2  LIMIT 4 OFFSET (4*$1)',
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