import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../firebase/auth";

export const Login = ({ logIn }) => {
  return (
    <div className="ui segment">
      <div className="">
        <div className="">
          <h2 class="ui teal image header">Login with Google</h2>
          <div className="">
            <button className="ui teal submit button" onClick={logIn}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: () => {
      dispatch(startLogin());
    }
  };
};

export default connect(undefined, mapDispatchToProps)(Login);
