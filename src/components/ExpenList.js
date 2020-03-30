import React from "react";
import { connect } from "react-redux";
import ExpenListItems from "./ExpenListItems";
// import { store } from "../redux/store";

export const ExpenList = props => {
  let { expences } = props;
  return (
    <div>
      {expences.length === 0 ? (
        <p>No Expences</p>
      ) : (
        expences.map(({ createdAt, note, amount, id }) => (
          <ExpenListItems
            key={id}
            createdAt={createdAt}
            note={note}
            amount={amount}
            id={id}
          />
        ))
      )}
    </div>
  );
};

const mapStateToProps = state => ({ expences: state.expenReducer });

export default connect(mapStateToProps)(ExpenList);
