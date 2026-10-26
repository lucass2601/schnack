import { eq } from "drizzle-orm";
import { db } from "../db/index.ts";
import { placesTable } from "../db/schema.ts";

type Place = typeof placesTable.$inferSelect;

export async function findAllPlaces() {
  return db.select().from(placesTable);
}

export async function findPlace(placeId: Place["id"]) {
  return db.select().from(placesTable).where(eq(placesTable.id, placeId));
}
