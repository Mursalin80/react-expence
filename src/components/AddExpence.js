import React from "react";
import ExpanceForm from "./ExpanceForm";
import { connect } from "react-redux";
import { startAddExpence } from "../redux/action";

export const AddExpence = ({ submit }) => {
  return (
    <div>
      <h1>Add Expence</h1>
      <ExpanceForm
        onSubmit={expence => {
          submit(expence);
        }}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    submit: expence => dispatch(startAddExpence(expence))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpence);
