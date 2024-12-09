const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.use('/data',express.static("data"));
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});