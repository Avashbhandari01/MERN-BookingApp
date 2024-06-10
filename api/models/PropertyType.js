const mongoose = require("mongoose");

const PropertyTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
});

const PropertyType = mongoose.model("PropertyType", PropertyTypeSchema);

module.exports = PropertyType;