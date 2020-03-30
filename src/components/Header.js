import React from "react";
import { Link, Router } from "react-router-dom";

const Header = () => (
  <div className="ui menu">
    <header className="header item">
      <h1>Expensify</h1>
      <Router>
        <Link to="/" activeClassName="is-active" exact={true} className="item">
          <div className="ui pramiry primary button">Dashboard</div>
        </Link>
        <Link to="/create" activeClassName="is-active" className="item">
          <div className="ui button">Create Expense</div>
        </Link>
      </Router>
      {/* <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink> */}
    </header>
  </div>
);

export default Header;
