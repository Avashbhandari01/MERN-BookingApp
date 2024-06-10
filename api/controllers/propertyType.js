const PropertyType = require("../models/PropertyType");

const createPropertyType = async (req, res, next) => {
    const newPropertyType = new PropertyType(req.body);

    try {
        const savedPropertyType = await newPropertyType.save();
        res.status(200).json(savedPropertyType);

    } catch (err) {
        next(err);
    }
}

const updatePropertyType = async (req, res, next) => {
    try {
        const updatedPropertyType = await PropertyType.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPropertyType);
    } catch (err) {
        next(err);
    }
}

const deletePropertyType = async (req, res, next) => {
    try {
        await PropertyType.findByIdAndDelete(req.params.id);
        res.status(200).json("PropertyType has been deleted successfully!");
    } catch (err) {
        next(err);
    }
}

const getAllPropertyType = async (req, res, nexy) => {
    try {
        const propertyTypes = await PropertyType.find();
        res.status(200).json(propertyTypes);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createPropertyType,
    updatePropertyType,
    deletePropertyType,
    getAllPropertyType
}