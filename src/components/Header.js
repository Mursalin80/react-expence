import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const Header = () => (
  <div className="ui menu">
    <header className="header item">
      <h1>Expensify</h1>
      <BrowserRouter>
        <Link to="/" activeClassName="is-active" exact={true} className="item">
          <div className="ui pramiry primary button">Dashboard</div>
        </Link>
        <Link to="/create" activeClassName="is-active" className="item">
          <div className="ui button">Create Expense</div>
        </Link>
      </BrowserRouter>
      {/* <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink> */}
    </header>
  </div>
);

export default Header;
