import React from "react";
import ExpanceForm from "./ExpanceForm";
import { connect } from "react-redux";
import { addExpance } from "../redux/action";

export const AddExpence = ({ onSubmit }) => {
  return (
    <div>
      <h1>Add Expence</h1>
      <ExpanceForm
        onSubmit={expence => {
          onSubmit(expence);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: expence => dispatch(addExpance(expence))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpence);
