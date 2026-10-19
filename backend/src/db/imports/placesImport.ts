import { db } from "../index.ts";

import { placesTable } from "../schema.ts";
import { readFileSync } from "node:fs";

type OSMElement = { id: number; tags: Record<string, string> } & (
  | { type: "node"; lat: number; lon: number }
  | { type: "way"; center: { lat: number; lon: number } }
);

const CHUNK_SIZE = 500;
const PLACES_EXPORT_PATH = "./data/hamburg.json";

export async function importPlaces() {
  const raw = JSON.parse(readFileSync(PLACES_EXPORT_PATH, "utf-8"));
  const elements: OSMElement[] = raw.elements;
  const rows = elements
    .map((el) => ({
      name: el.tags.name ?? null,
      lat: el.type === "node" ? el.lat : el.center?.lat,
      lon: el.type === "node" ? el.lon : el.center?.lon,
      category: el.tags.amenity ?? null,
      cuisine: el.tags.cuisine?.split(";") ?? [],
      address_city: el.tags["addr:city"] ?? null,
      address_country: el.tags["addr:country"] ?? null,
      address_floor: el.tags["addr:floor"] ?? null,
      address_housenumber: el.tags["addr:housenumber"] ?? null,
      address_postcode: el.tags["addr:postcode"] ?? null,
      address_street: el.tags["addr:street"] ?? null,
      openingHours: el.tags["opening_hours"] ?? null,
      phone:
        el.tags.phone ??
        el.tags["contact:phone"] ??
        el.tags["contact:mobile"] ??
        null,
      website:
        el.tags.website ?? el.tags["contact:website"] ?? el.tags.url ?? null,
      wheelchair: el.tags["wheelchair"] ?? null,
      osmId: el.id,
      osmType: el.type,
    }))
    .filter(
      (r) =>
        (r.osmType === "node" || r.osmType === "way") &&
        r.name !== null &&
        r.lat !== null &&
        r.lon !== null,
    );

  await db.transaction(async (tx) => {
    for (let i = 0; i < rows.length; i += CHUNK_SIZE) {
      const chunk = rows.slice(i, i + CHUNK_SIZE);
      await tx
        .insert(placesTable)
        .values(chunk)
        .onConflictDoNothing({
          target: [placesTable.osmId, placesTable.osmType],
        });
      console.log(i);
    }
  });

  console.log("Import successfully completed.");
}

importPlaces()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => db.$client.end());
