import type { NextFunction, Request, Response } from "express";
import * as placesService from "../services/placesService.ts";

export const getPlaces = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const places = await placesService.findAllPlaces();

  res.json(places);
};
