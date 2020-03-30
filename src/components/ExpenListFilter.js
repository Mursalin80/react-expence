import React from "react";
import { connect } from "react-redux";
import { noteFilter } from "../redux/action";

const ExpenListFilter = ({ filter, dispacth }) => {
  return (
    <div className="ui form">
      <input
        className="ui field"
        type="text"
        value={filter.note}
        onChange={e => {
          dispacth(noteFilter(e.target.value));
        }}
      />
      <select
        className="ui fluid dropdown"
        value={filter.sortBy}
        onChange={e => {
          if (e.target.value === "date") {
          } else if (e.target.value === "amount") {
          }
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return { filter: state.filterReducer };
};

export default connect(mapStateToProps)(ExpenListFilter);
