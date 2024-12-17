const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const pool = require("../config/db.js");

exports.register_user = asyncHandler((req, res) => {
    let values = Object.values(req.body)

    const query = {
        text: 'INSERT INTO users(user_name, user_last_name, user_email, user_password) VALUES($1, $2, $3, $4)',
        values: values,
    }

    const result = pool.query(query)

    res.status(200).json({ message: "Registration successful" });
})

exports.signup_user = asyncHandler(async (req, res) => {
    try {
        // Извлечение значений из тела запроса
        let values = Object.values(req.body)

        // Параметризованный SQL-запрос
        const query = {
            text: 'SELECT * FROM users WHERE user_email = $1 AND user_password = $2',
            values: values,
        };

        console.log(query);

        // Выполнение запроса
        const result = await pool.query(query);

        // Проверка результата
        if (result.rows.length > 0) {
            res.status(200).json({ message: "All good!" });
            console.log("All good!");
        } else {
            res.status(400).json({ message: "Everything bad!" });
            console.log("Everything bad!");
        }
    } catch (error) {
        console.error("Database query error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
});