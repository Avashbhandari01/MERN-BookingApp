const express = require("express");
const { createPropertyType, updatePropertyType, deletePropertyType, getAllPropertyType } = require("../controllers/propertyType");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createPropertyType);

// UPDATE
router.put("/:id", verifyAdmin, updatePropertyType);

// DELETE
router.delete("/:id", verifyAdmin, deletePropertyType);

// GET ALL
router.get("/", getAllPropertyType);

module.exports = router;
