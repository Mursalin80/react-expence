const initState = [];
export const initFilterState = {
  note: "",
  amount: 0,
  createdAt: undefined,
  sortBy: ""
};

export const expenReducer = (state = initState, action) => {
  switch (action.type) {
    case "Add_exp":
      return [...state, action.expence];
    case "Remove_exp":
      return state.filter(({ id }) => id !== action.id);
    case "Edit_exp":
      return state.map(exp => {
        if (exp.id === action.id) {
          return { ...exp, ...action.payload };
        } else {
          return exp;
        }
      });
    default:
      return state;
  }
};

// filter Reduser
export const filterReducer = (state = initFilterState, action = {}) => {
  switch (action.type) {
    case "Note_filter":
      return { ...state, note: action.note };
    case "Sort_by_Date":
      return { ...state, sortBy: "date" };
    case "Sort_by_Amount":
      return { ...state, sortBy: "amount" };
    default:
      return state;
  }
};