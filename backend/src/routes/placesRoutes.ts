import express from "express";
const router = express.Router();

import { getPlaces } from "../controllers/placesController.ts";

router.get("/", getPlaces);

export default router;
