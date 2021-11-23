import * as gems from "..";

// gems Blend
test("gems.blend.get_blends #1 (pass)", async () => {
  const results = await gems.blend.get_blends("memewarsreal");
  expect( results ).toBeTruthy;
});

test("gems.blend.get_blends #1 (pass)", async () => {
  const results = await gems.blend.get_blends("memewarsreal");
  expect( results ).toBeTruthy;
});

test("gems.blend.get_recipes #1 (pass)", async () => {
  const results = await gems.blend.get_recipes("memewarsreal");
  expect( results ).toBeTruthy;
});

test("gems.blend.get_status #1 (pass)", async () => {
  const results = await gems.blend.get_status();
  expect( results ).toBeTruthy;
});

test("gems.blend.get_scopes #1 (pass)", async () => {
  const results = await gems.blend.get_scopes();
  expect( results ).toBeTruthy;
});
