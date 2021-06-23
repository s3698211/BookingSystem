import express from "express";

import { getStadiums, createStadium } from "../controllers/stadiums.js";

const router = express.Router();

router.get("/", getStadiums);
router.post("/", createStadium);

export default router;
