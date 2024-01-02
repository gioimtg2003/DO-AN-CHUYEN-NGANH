const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended: true}
));

const PORT = process.env.PORT || 3001;



app.listen(PORT, function() {
    console.log(`Server running on Port: ${PORT}`)
})