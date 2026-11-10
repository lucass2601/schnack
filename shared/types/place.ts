import type { placesTable } from "../../api/src/db/schema";

export type Place = typeof placesTable.$inferSelect;
