import configMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  removeExpance,
  editExpance,
  startAddExpence,
  addExpance,
  sortByAmount,
  sortByDate,
  noteFilter,
  startSetExpances
} from "../redux/action";

const createMockStore = configMockStore([thunk]);

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
    expence: { ...expData }
  });
});

// // add expence action with no data
test("Adding Expence Action generator", () => {
  let exp = addExpance({});
  expect(exp).toEqual({
    type: "Add_exp",
    expence: {}
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

// test("should startAddExpence", done => {
//   const store = createMockStore({});
//   let exp = {
//     note: "new",
//     amount: 250,
//     createdAt: 6000,
//     description: "feb2020"
//   };
//   store.dispatch(startAddExpence(exp)).then(() => {
//     let action = store.getActions();
//     expect(action[0]).toEqual({
//       type: "Add_exp",
//       expence: {
//         id: expect.any(String),
//         ...exp
//       }
//     });
//     done();
//   });
// });

test("should start set expences from firebase", done => {
  const store = createMockStore({});
  store.dispatch(startSetExpances()).then(() => {
    let action = store.getActions();
    expect(action).toEqual({
      type: "SET_exp",
      expences
    });
  });
  done();
});
