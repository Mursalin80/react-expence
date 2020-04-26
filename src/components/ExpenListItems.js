import React from "react";
import { connect } from "react-redux";
import { startRemoveExpance } from "../redux/action";
import { Link } from "react-router-dom";

export const ExpenListItems = ({ createdAt, note, amount, dispatch, id }) => {
  return (
    <div className="ui segment">
      <i className="ui teal right ribbon label">Expance</i>
      {
        <Link to={`/edit/${id}`}>
          <h2>{note}</h2>
        </Link>
      }

      <p>
        <i className="calendar alternate outline icon"></i>createdAt :
        {createdAt}
      </p>

      <h3>
        <i className="money bill alternate outline icon"></i> amount:{amount}
      </h3>
      <button
        className="ui button"
        onClick={() => {
          dispatch(startRemoveExpance({ id }));
        }}
      >
        Discard
      </button>
    </div>
  );
};

export default connect()(ExpenListItems);
