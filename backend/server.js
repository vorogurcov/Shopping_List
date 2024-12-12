const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


const corsOptions = {
    origin: "http://localhost:63342",
    methods: "GET,POST,OPTIONS", // Allow specific methods
    allowedHeaders: "Content-Type", // Allow specific headers
};
app.use(cors(corsOptions));

app.use(express.json());

app.options("*", cors(corsOptions)); // Explicitly handle preflight requests

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/register", (req, res) => {
    console.log(req.body); // Log the request body
    res.status(200).json({ message: "Registration successful" }); // Return JSON response
});

app.post("/signup", (req,res) =>{

    if(req.body.Email == 'ya@a.ru'){
        res.status(200).json({message: "All good!"});
        console.log("All good!");
    }

    else
        res.status(2000).json({message: "Everything bad!"});

})
app.use("/data", express.static("data"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
