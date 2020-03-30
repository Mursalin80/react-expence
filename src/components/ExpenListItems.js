import React from "react";
import { connect } from "react-redux";
import { removeExpance } from "../redux/action";
import { Link } from "react-router-dom";

export const ExpenListItems = ({ createdAt, note, amount, dispatch, id }) => {
  return (
    <div className="ui segment">
      {
        <Link to={`/edit/${id}`}>
          <h2>{note}</h2>
        </Link>
      }

      <p>
        createdAt : {createdAt} and amount: {amount}{" "}
      </p>
      <button
        onClick={() => {
          dispatch(removeExpance({ id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(ExpenListItems);
