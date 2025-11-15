"use server";

import type { InferInsertModel } from "drizzle-orm";
import { db } from "@/lib/db";
import { itemTable } from "@/lib/db/schema";

export async function addItem(values: InferInsertModel<typeof itemTable>) {
    await db.insert(itemTable).values(values);
}
