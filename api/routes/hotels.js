const express = require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels, countByCity } = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

// DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// GET
router.get("/find/:id", getHotel);

// GET ALL
router.get("/", getAllHotels);

//GET COUNT BY CITY
router.get("/countByCity", countByCity);

//GET COUNT BY TYPE
// router.get("/countByType", getHotels);

module.exports = router;