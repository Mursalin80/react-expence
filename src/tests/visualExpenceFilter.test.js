import { getVisibalExpances, getVisExpSortBy } from "../redux/action";
import { expData } from "../redux/expenData";

let exp1 = expData[0];

test("Vissual Expence filter", () => {
  let visExp = getVisibalExpances(expData, { note: exp1.note });
  expect(visExp).toEqual([exp1]);
});

// get all expencees
test("Vissual Expence filter", () => {
  let visExp = getVisibalExpances(expData, { note: "bill" });
  expect(visExp).toEqual([
    expData[0],
    expData[1],
    expData[2],
    expData[3],
    expData[4]
  ]);
});

// get all expencees sort by amount
test("Vissual Expence filter sortBy amount", () => {
  let visExp = getVisExpSortBy(expData, { note: "bill", sortBy: "amount" });
  expect(visExp).toEqual([
    expData[0],
    expData[1],
    expData[4],
    expData[2],
    expData[3]
  ]);
});

// get all expencees sort by date
test("Vissual Expence filter sortBy date", () => {
  let visExp = getVisExpSortBy(expData, { note: "bill" });
  expect(visExp).toEqual([
    expData[0],
    expData[1],
    expData[2],
    expData[3],
    expData[4]
  ]);
});
