import type { Request, Response } from "express";
import * as placesService from "../services/placesService.ts";
import type { placesTable } from "../db/schema.ts";

type Place = typeof placesTable.$inferSelect;

export const getPlaces = async (_req: Request, res: Response) => {
  const places = await placesService.findAllPlaces();
  res.status(200).json({ places });
};

export const getPlace = async (
  req: Request<{ placeId: Place["id"] }>,
  res: Response,
) => {
  const { placeId } = req.params;

  const [place] = await placesService.findPlace(placeId);
  res.status(200).json({ place });
};
