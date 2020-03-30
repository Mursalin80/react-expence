import { filterReducer } from "../redux/reducer";
const initFilterState = {
  note: "",
  amount: 0,
  createdAt: undefined,
  sortBy: ""
};
// filter reducer
test("Expance reducer initial ", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({ ...initFilterState });
});

test("should filter sort by amount", () => {
  const state = filterReducer(undefined, { type: "Sort_by_Amount" });
  expect(state.sortBy).toBe("amount");
});

test('should "Sort_by_Date"', () => {
  let state = filterReducer(undefined, { type: "Sort_by_Date" });
  expect(state.sortBy).toBe("date");
});

test('should "Sort_by_Date" with state init data', () => {
  let state = filterReducer(initFilterState, { type: "Sort_by_Date" });
  expect(state.sortBy).toBe("date");
});

test("should note    filter ", () => {
  let state = filterReducer(initFilterState, {
    type: "Note_filter",
    note: "New Note"
  });
  expect(state.note).toBe("New Note");
});

// filter with no action

test("With no action provided", () => {
  let state = filterReducer(initFilterState);
  expect(state).toEqual({ ...initFilterState });
});
