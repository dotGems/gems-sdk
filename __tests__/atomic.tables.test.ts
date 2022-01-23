import * as sdk from "..";

// Atomic Drops
test("atomic.drops.get_drops #1 (pass)", async () => {
  const results1 = await sdk.atomic.drops.get_drops([81, 83])
  expect( results1 ).toBeTruthy;

  const results2 = await sdk.atomic.drops.get_drop(81)
  expect( results2 ).toBeTruthy;
});

// Atomic Assets
test("atomic.assets.get_collections #1 (pass)", async () => {
  const results = await sdk.atomic.assets.get_collections("merijn.gems")
  expect( results.length ).toBeTruthy;
});

test("atomic.assets.templates #1 (pass)", async () => {
  const results = await sdk.atomic.assets.get_templates("merijn.gems", 2420)
  expect( results.length ).toBeTruthy;
});

test("atomic.assets.schemas #1 (pass)", async () => {
  const results = await sdk.atomic.assets.get_schemas("merijn.gems", "merijnworks1")
  expect( results.length ).toBeTruthy;
});