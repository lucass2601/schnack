import { sql } from "drizzle-orm";
import {
  bigint,
  doublePrecision,
  text,
  timestamp,
  uuid,
  snakeCase,
} from "drizzle-orm/pg-core";

export const placesTable = snakeCase.table("places", {
  id: uuid().defaultRandom().primaryKey().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  name: text().notNull(),
  lat: doublePrecision().notNull(),
  lon: doublePrecision().notNull(),
  category: text().notNull(),
  cuisine: text()
    .array()
    .notNull()
    .default(sql`'{}'::text[]`),
  address: text(),
  openingHours: text(),
  phone: text(),
  website: text(),
  wheelchair: text(),
  osmId: bigint({ mode: "number" }),
  osmType: text(),
});
