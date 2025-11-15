CREATE TABLE "item" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"room" text NOT NULL,
	"visibility" text NOT NULL,
	"location" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "room" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "item" ADD CONSTRAINT "item_room_room_id_fk" FOREIGN KEY ("room") REFERENCES "public"."room"("id") ON DELETE cascade ON UPDATE no action;