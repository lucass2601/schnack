import type { NextFunction, Request, Response } from "express";
import * as placesService from "../services/placesService.ts";

export const getPlaces = async (_req: Request, res: Response) => {
  const places = await placesService.findAllPlaces();
  res.status(200).json({ places });
};
