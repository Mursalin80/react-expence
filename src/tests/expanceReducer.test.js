import { expenReducer } from "../redux/reducer";
import { expData } from "../redux/expenData";

test("should ", () => {
  let state = expenReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

// remove expance
test("should remove expance ", () => {
  let state = expenReducer(expData, { type: "Remove_exp", id: 5 });
  expect(state).toEqual([expData[0], expData[1], expData[2], expData[3]]);
});

// add expance

test("should add expance", () => {
  let state = expenReducer(expData, {
    type: "Add_exp",
    expence: { id: 6, amount: 300, createdAt: 7800 }
  });
  expect(state).toEqual([...expData, { id: 6, amount: 300, createdAt: 7800 }]);
});

// edit expance

test("should edit expance", () => {
  let state = expenReducer(expData, {
    type: "Edit_exp",
    id: 2,
    payload: { amount: 5555 }
  });
  expect(state[1].amount).toBe(5555);
});
