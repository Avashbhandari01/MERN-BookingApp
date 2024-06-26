const express = require("express");
const { createRoom, updateRoom, deleteRoom, getRoom, getAllRooms, updateRoomAvailability } = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

// CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE
router.put("/:id", verifyAdmin, updateRoom);

// UPDATE AVAILABILITY
router.put("/availability/:id", updateRoomAvailability);

// DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET
router.get("/:id", getRoom);

// GET ALL
router.get("/", getAllRooms);

module.exports = router;