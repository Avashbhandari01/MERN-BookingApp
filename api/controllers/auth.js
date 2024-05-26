const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");

const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        });

        await newUser.save();
        res.status(200).send("User has been created");

    } catch (error) {
        next(error);
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return next(createError(400, "Username or Password is incorrect!"));

        const { password, isAdmin, ...otherData } = user._doc;
        res.status(200).json({ ...otherData });

    } catch (error) {
        next(error);
    }
}

module.exports = {
    register,
    login
}
