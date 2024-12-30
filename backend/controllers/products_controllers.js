const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const pool = require("../config/db.js");
const SECRET_KEY = require('../config/jwt_secret_key');
const secret_key = require("../config/jwt_secret_key");


exports.get_products = asyncHandler(async (req,res) =>{
    try{

        let values = Object.values(req.body);
        let jwt_token = req.cookies.jwtToken;

        let decoded;
        try {
            decoded = jwt.verify(jwt_token, SECRET_KEY);
        } catch (err) {
            if (err.name === 'JsonWebTokenError') {
                const refreshToken = req.cookies.jwtRefreshToken;
                if (!refreshToken) {
                    return res.status(401).json({ message: "Refresh token required" });
                }

                try {
                    const refreshDecoded = jwt.verify(refreshToken, SECRET_KEY);
                    const newAccessToken = jwt.sign({user_id:refreshDecoded.user_id},secret_key, {expiresIn:60});
                    console.log("CREATE NEW ACCESS TOKEN");
                    res.setHeader('Set-Cookie', `jwtToken=${newAccessToken}; HttpOnly; Secure; SameSite=None; Max-Age=60`);
                    decoded = jwt.verify(newAccessToken,SECRET_KEY);
                } catch (refreshErr) {
                    return res.status(403).json({ message: "Invalid or expired refresh token" });
                }
            } else {
                return res.status(403).json({ message: err.message + err.name });
            }
        }


        const user_id = decoded.user_id;

        values.push(user_id);

        const query = {
            text:'SELECT * FROM users_to_products usp INNER JOIN users u on usp.user_id = u.user_id INNER JOIN products p on p.product_id = usp.product_id WHERE u.user_id = $2 LIMIT 4 OFFSET (4*$1)',
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