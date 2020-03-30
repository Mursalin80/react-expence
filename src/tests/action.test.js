import { removeExpance, editExpance, addExpance } from "../redux/action";
import { noteFilter, sortByAmount, sortByDate } from "../redux/action";
// remove expevce action
test("Tesing Action generator remove expence", () => {
  let rem = removeExpance({ id: 1230 });
  expect(rem).toEqual({ type: "Remove_exp", id: 1230 });
});

// edit expence action

test("Tesing Action generator Edit expence", () => {
  let update = editExpance({
    id: 1230,
    update: { note: "new Note", amount: 300 }
  });
  expect(update).toEqual({
    type: "Edit_exp",
    id: 1230,
    payload: { note: "new Note", amount: 300 }
  });
});

// add expence action

test("Adding Expence Action generator", () => {
  let expData = { note: "Milk bill", amount: 5500, createdAt: "feb 2020" };
  let exp = addExpance(expData);
  expect(exp).toEqual({
    type: "Add_exp",
    expence: { ...expData, id: expect.any(String), desc: "" }
  });
});

// // add expence action with no data
test("Adding Expence Action generator", () => {
  let exp = addExpance();
  expect(exp).toEqual({
    type: "Add_exp",
    expence: {
      note: "",
      amount: 0,
      desc: "",
      createdAt: 0,
      id: expect.any(String)
    }
  });
});

// testing note filter action generator

test("testing note filter action generator", () => {
  let nFilte = noteFilter("milk bill");
  expect(nFilte).toEqual({ type: "Note_filter", note: "milk bill" });
});

// filter sort by amount

test("sortby amount action filter filte", () => {
  let amountF = sortByAmount();
  expect(amountF).toEqual({
    type: "Sort_by_Amount"
  });
});

// sortByDate action filter

test("sortByDate action filter", () => {
  let sByDate = sortByDate();
  expect(sByDate).toEqual({
    type: "Sort_by_Date"
  });
});
