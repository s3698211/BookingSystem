import express from "express";

import {
  getBooking,
  getAllBookings,
  createBooking,
} from "../controllers/bookings.js";

const router = express.Router();

router.get("/", getAllBookings);
router.post("/", createBooking);

export default router;
