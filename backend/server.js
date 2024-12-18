const express = require("express");
const authRouter = require("./routes/auth_routes.js");
const productsRouter = require('./routes/products_routes');
const corsOptions = require("./middlewares/cors_middleware.js")
const app = express();
const port = 3000;

app.use(corsOptions);
app.options("*", corsOptions);

app.use(express.json());

app.use("/api", authRouter);

app.use("/api", productsRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
