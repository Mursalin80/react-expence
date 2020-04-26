import React from "react";
import { Link } from "react-router-dom";
import {startLogin, startLogout} from '../firebase/auth'
import {connect} from "react-redux";


export const Header = ({logout}) => (
  <div className="ui menu">
    <header className="header item">
      <h1>Expensify</h1>

      <Link
        to="/dashboard"
        className="item"
      >
        <div className="ui pramiry primary button">Dashboard</div>
      </Link>
      <Link
        to="/create"
        activeClassName="is-active"
        className="item"
      >
        <div className="ui button">Create Expense</div>
      </Link>
      <button className='ui secondary button'
              onClick={logout}
      >Logout</button>
    </header>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(startLogout());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Header);

