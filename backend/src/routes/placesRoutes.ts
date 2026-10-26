import express from "express";
const router = express.Router();

/**
 * @openapi
 * /places:
 *   get:
 *     tags: [Places]
 *     summary: Get all places
 *     responses:
 *       200:
 *         description: Returns a places array
 * /places/{placeId}:
 *   get:
 *     tags: [Places]
 *     summary: Get a place by ID
 *     parameters:
 *      - in: path
 *        name: placeId
 *        schema:
 *          type: string
 *        required: true
 *        description: ID of the place
 *     responses:
 *       200:
 *         description: Returns a place object
 */

import { getPlaces, getPlace } from "../controllers/placesController.ts";

router.get("/", getPlaces);
router.get("/:placeId", getPlace);

export default router;
