import * as gems from "../";

test("atomicdropsx.get_drops #1 (pass)", async () => {
  const results = await gems.atomicdropsx.get_drops(81)
  expect( results ).toBeTruthy;
});

test("atomicassets.get_collections #1 (pass)", async () => {
  const results = await gems.atomicassets.get_collections("merijn.gems")
  expect( results.length ).toBeTruthy;
});

test("atomicassets.templates #1 (pass)", async () => {
  const results = await gems.atomicassets.get_templates("merijn.gems", 2420)
  expect( results.length ).toBeTruthy;
});

test("atomicassets.schemas #1 (pass)", async () => {
  const results = await gems.atomicassets.get_schemas("merijn.gems", "merijnworks1")
  expect( results.length ).toBeTruthy;
});