import * as gems from "..";

// Atomic Drops
test("atomic.drops.get_drops #1 (pass)", async () => {
  const results = await gems.atomic.drops.get_drops(81)
  expect( results ).toBeTruthy;
});

// Atomic Assets
test("atomic.assets.get_collections #1 (pass)", async () => {
  const results = await gems.atomic.assets.get_collections("merijn.gems")
  expect( results.length ).toBeTruthy;
});

test("atomic.assets.templates #1 (pass)", async () => {
  const results = await gems.atomic.assets.get_templates("merijn.gems", 2420)
  expect( results.length ).toBeTruthy;
});

test("atomic.assets.schemas #1 (pass)", async () => {
  const results = await gems.atomic.assets.get_schemas("merijn.gems", "merijnworks1")
  expect( results.length ).toBeTruthy;
});