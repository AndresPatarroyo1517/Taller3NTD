const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const walletRoutes = require("./routes/web-routes");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false })); 
app.use(parser.json()); 
app.use("", walletRoutes);
app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});