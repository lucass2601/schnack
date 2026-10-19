import { db } from "../db/index.ts";
import { placesTable } from "../db/schema.ts";

export async function findAllPlaces() {
  // ! Don't forget to change. Set limit to 100 for testing purposes
  return db.select().from(placesTable).limit(100);
}
