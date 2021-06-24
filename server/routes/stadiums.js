import express from "express";

import {
  getStadiums,
  createStadium,
  getStadiumBookings,
} from "../controllers/stadiums.js";

const router = express.Router();

router.get("/", getStadiums);
router.post("/", createStadium);
router.get("/:id/bookings", getStadiumBookings);

export default router;
