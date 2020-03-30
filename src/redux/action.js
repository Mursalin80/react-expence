import { v4 as uuidv4 } from "uuid";

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
export const addExpance = ({
  note = "",
  amount = 0,
  desc = "",
  createdAt = 0
} = {}) => ({
  type: "Add_exp",
  expence: { id: uuidv4(), note, amount, desc, createdAt }
});

// remove expance action
export const removeExpance = ({ id } = {}) => ({
  type: "Remove_exp",
  id
});

// Edit expance action
export const editExpance = ({ id, update }) => ({
  type: "Edit_exp",
  id,
  payload: update
});

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
