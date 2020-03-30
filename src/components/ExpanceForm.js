import React, { Component } from "react";

export default class ExpanceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: props.expence ? props.expence.note : "",
      createdAt: props.expence ? props.expence.createdAt : 0,
      description: props.expence ? props.expence.description : "",
      amount: props.expence ? props.expence.amount : 0,
      error: ""
    };
  }

  onChangeHandler = e => {
    let { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  onSubmitHandler = e => {
    e.preventDefault();
    let { note, description, amount, createdAt } = this.state;
    if (!note && !amount) {
      this.setState({ error: "No note and amount is provided." });
    }
    this.props.onSubmit({
      note,
      description,
      amount,
      createdAt
    });
  };

  render() {
    return (
      <div className="ui container">
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <input
            className="field"
            type="text"
            name="note"
            placeholder="note"
            value={this.state.note}
            onChange={this.onChangeHandler}
          />
          <input
            className="field"
            type="text"
            name="amount"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onChangeHandler}
          />
          <input
            className="field"
            type="text"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.onChangeHandler}
          />
          <input
            className="field"
            type="text"
            name="createdAt"
            placeholder="createdAt"
            value={this.state.createdAt}
            onChange={this.onChangeHandler}
          />

          <button className="ui button">Add Expence</button>
        </form>
      </div>
    );
  }
}
