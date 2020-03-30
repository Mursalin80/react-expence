import { connect } from "react-redux";
import ExpanceForm from "./ExpanceForm";
import { editExpance } from "../redux/action";

import React, { Component } from "react";

export class EditExpence extends Component {
  onSubmit = expence => {
    this.props.editExpance(this.props.expence.id, expence);
  };
  render() {
    return (
      <div>
        <ExpanceForm expence={this.props.expence} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateTopProps = (state, props) => {
  return {
    expence: state.expenReducer.find(exp => exp.id === props.match.params.id)
  };
};

const mapDispatchToPrors = dispatch => {
  return {
    editExpance: (id, expence) => dispatch(editExpance(id, expence))
  };
};

export default connect(mapStateTopProps, mapDispatchToPrors)(EditExpence);
