const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL);

app.listen(5000,()=>{
    console.log("Cicada API Running");
});
