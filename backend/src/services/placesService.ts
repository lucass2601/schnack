import { db } from "../db/index.ts";
import { placesTable } from "../db/schema.ts";

export async function findAllPlaces() {
  return db.select().from(placesTable);
}
