import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import test from "node:test";
import assert from "node:assert/strict";

test("homepage is branded for Mango Factory with ordering and directions", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Mango Factory/);
  assert.match(page, /Order online/);
  assert.match(page, /Get directions/);
  assert.match(page, /326 Commercial St/);
});

test("marketing tracker route exists and exposes campaign metrics", async () => {
  const routePath = new URL("../app/marketing/page.tsx", import.meta.url);
  assert.equal(existsSync(routePath), true);

  const page = await readFile(routePath, "utf8");
  assert.match(page, /Marketing tracker/);
  assert.match(page, /Campaigns/);
  assert.match(page, /Leads/);
});
