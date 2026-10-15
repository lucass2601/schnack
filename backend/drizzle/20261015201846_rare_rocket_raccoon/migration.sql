CREATE TABLE "places" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"lat" double precision NOT NULL,
	"lon" double precision NOT NULL,
	"category" text NOT NULL,
	"cuisine" text[] DEFAULT '{}'::text[] NOT NULL,
	"address" text,
	"opening_hours" text,
	"phone" text,
	"website" text,
	"wheelchair" text,
	"osm_id" bigint,
	"osm_type" text
);
