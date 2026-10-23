import type { placesTable } from "../../backend/src/db/schema";

export type Place = typeof placesTable.$inferSelect;
