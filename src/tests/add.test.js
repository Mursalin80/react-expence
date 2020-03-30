let add = (a, b) => a + b;

test("Sum 2 numbers", () => {
  let res = add(5, 5);
  expect(res).toBe(10);
});
