import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div className="ui menu">
    <header className="header item">
      <h1>Expensify</h1>

      <Link to="/" activeClassName="is-active" exact={true} className="item">
        <div className="ui pramiry primary button">Dashboard</div>
      </Link>
      <Link
        to="/create"
        activeClassName="is-active"
        className="item"
        exact={true}
      >
        <div className="ui button">Create Expense</div>
      </Link>
    </header>
  </div>
);

export default Header;
