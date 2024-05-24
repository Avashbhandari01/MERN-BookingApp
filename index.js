const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log(`Connected to MongoDB!`)
    } catch (error) {
        throw (error);
    }
};

app.listen(process.env.PORT, () => {
    connect()
    console.log(`Server is running on port: ${process.env.PORT}`);
})