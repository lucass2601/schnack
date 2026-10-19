import express from "express";
const router = express.Router();

/**
 * @openapi
 * /places:
 *   get:
 *     tags: [Places]
 *     description: Gets all the places
 *     responses:
 *       200:
 *         description: Returns a places array
 */

import { getPlaces } from "../controllers/placesController.ts";

router.get("/", getPlaces);

export default router;
