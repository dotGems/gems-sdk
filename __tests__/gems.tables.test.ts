import * as sdk from "..";

test("gems.blend.get_blends #1 (pass)", async () => {
  const results1 = await sdk.gems.blend.get_blends("memewarsreal");
  expect( results1 ).toBeTruthy;

  // with options
  const results2 = await sdk.gems.blend.get_blends("memewarsreal", 1665);
  expect( results2 ).toBeTruthy;
});

test("gems.blend.get_recipes #1 (pass)", async () => {
  const results1 = await sdk.gems.blend.get_recipes("memewarsreal");
  expect( results1 ).toBeTruthy;

  // with options
  const results2 = await sdk.gems.blend.get_recipes("memewarsreal", 0);
  expect( results2 ).toBeTruthy;
});

test("gems.blend.get_status #1 (pass)", async () => {
  const results = await sdk.gems.blend.get_status();
  expect( results ).toBeTruthy;
});

test("gems.blend.get_collections #1 (pass)", async () => {
  const results = await sdk.gems.blend.get_collections();
  expect( results ).toBeTruthy;
});
