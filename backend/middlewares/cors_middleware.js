const cors = require("cors");

const corsOptions = {
    origin: "http://localhost:8080",
    methods: "GET,POST,OPTIONS", // Allow specific methods
    allowedHeaders: "Content-Type",// Allow specific headers
    credentials:true,
};

module.exports = cors(corsOptions);