import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { expenReducer, filterReducer } from "./reducer";
// import { expData } from "./expenData";
// import {
//   addExpance,
//   editExpance,
//   // getVisibalExpances,
//   noteFilter,
//   sortByAmount
// } from "./action";

console.log("Redux is running");

// Expence Reduser

// store
export let store = createStore(
  combineReducers({ expenReducer, filterReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

// store.subscribe(() => {
//   // console.log("store.subscribe: ", store.getState());
//   // const state = store.getState();
//   // let visibleExp = getVisibalExpances(state.expenReducer, state.filterReducer);
//   // console.log("state.filterReducer : ", state.filterReducer);
//   // console.log("Visible Expances: ", visibleExp);
// });

// store.dispatch(
//   addExpance({
//     note: "Milk bill",
//     Desc: "Milk bill for month of Jan 2020",
//     amount: 5600,
//     createdAt: 5300
//   })
// );
// const exp1 = store.dispatch(addExpance({ ...expData[0] }));
// console.log("exp1 ", exp1.expence.id);
// store.dispatch(addExpance({ ...expData[1] }));

//store.dispatch(removeExpance(exp1.expence));

// store.dispatch(
//   editExpance({
//     id: exp1.expence.id,
//     update: {
//       note: "Net Bill",
//       Desc: "net bill for month of Jan 2020",
//       amount: 1100
//     }
//   })
// );

// note filter dispatch

// store.dispatch(noteFilter("net"));
// store.dispatch(sortByAmount());
