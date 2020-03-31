// import { v4 as uuidv4 } from "uuid";
import db from "../firebase/firebase";

export const getVisibalExpances = (expances, { note = "" } = {}) => {
  return expances.filter(exp => exp.note.includes(note));
};

export const getVisExpSortBy = (
  expances,
  { note = "", sortBy = "date" } = {}
) => {
  return expances
    .filter(exp => exp.note.includes(note))
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt > b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount > b.amount ? 1 : -1;
      }
    });
};

// add expance action
export const addExpance = expence => ({
  type: "Add_exp",
  expence
});

export const startAddExpence = (expenceData = {}) => {
  return dispatch => {
    const {
      note = "",
      amount = 0,
      description = "",
      createdAt = 0
    } = expenceData;
    let expence = { note, amount, description, createdAt };
    return db
      .ref("expences")
      .push(expence)
      .then(ref => {
        console.log("Firebase return: ", expence);
        dispatch(addExpance({ id: ref.key, ...expence }));
      })
      .catch(e => {
        console.log(e);
      });
  };
};

// remove expance action
export const removeExpance = ({ id } = {}) => ({
  type: "Remove_exp",
  id
});

export const startRemoveExpance = ({ id } = {}) => {
  return dispatch => {
    return db
      .ref(`expences/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpance({ id }));
      });
  };
};

// Edit expance action
export const editExpance = ({ id, update }) => ({
  type: "Edit_exp",
  id,
  payload: update
});

export const startEditExpance = ({ id, update }) => {
  return dispatch => {
    return db
      .ref(`expences/${id}`)
      .update(update)
      .then(() => {
        dispatch(editExpance({ id, update }));
      });
  };
};

// add note filter action

export const noteFilter = (note = "") => ({
  type: "Note_filter",
  note
});

// sortBy filter action

export const sortByDate = () => ({
  type: "Sort_by_Date"
});

export const sortByAmount = () => ({
  type: "Sort_by_Amount"
});

export const setExpanses = expances => {
  return {
    type: "SET_exp",
    expances
  };
};

export const startSetExpances = () => {
  return dispatch => {
    return db
      .ref("expences")
      .once("value")
      .then(snap => {
        let expences = [];
        snap.forEach(childSnap => {
          expences.push({
            id: childSnap.key,
            ...childSnap.val()
          });
        });
        dispatch(setExpanses(expences));
      });
  };
};
