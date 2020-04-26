import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  return (
    <div>
      <Route
        {...rest}
        component={props => {
          return isAuthenticated ? (
            <div>
              <Header />
              <Component {...props} />
            </div>
          ) : (
            <Redirect to="/" />
          );
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.authReducer.uid
  };
};

export default connect(mapStateToProps)(PrivateRoute);
