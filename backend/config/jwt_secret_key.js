require('dotenv').config();

const secret_key = process.env.JWT_SECRET_KEY;

module.exports = secret_key;