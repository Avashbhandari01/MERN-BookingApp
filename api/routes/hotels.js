const express = require("express");
const { createHotel, updateHotel, deleteHotel, getHotel, getAllHotels } = require("../controllers/hotel");

const router = express.Router();

// CREATE
router.post("/", createHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);

// GET
router.get("/:id", getHotel);

// GET ALL
router.get("/", getAllHotels);

module.exports = router