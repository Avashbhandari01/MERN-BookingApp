const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const roomsRoute = require("./routes/rooms");
const hotelsRoute = require("./routes/hotels");
const cookieParser = require("cookie-parser");
const cors = require("cors");
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

mongoose.connection.on("disconnected", () => {
    console.log(`MongoDB Disconnected!`)
})

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    return res.status(err.status).json({
        success: false,
        status: err.status || 500,
        message: err.message || "Something went wrong!",
        stack: err.stack
    });
});

app.listen(process.env.PORT, () => {
    connect()
    console.log(`Server is running on port: ${process.env.PORT}`);
})