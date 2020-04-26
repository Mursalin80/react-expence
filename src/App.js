import React from "react";
import { Router, Route, Switch } from "react-router-dom";
// import "./firebase/firebase";
import { createBrowserHistory } from "history";
import ExpenDashBord from "./components/ExpenDashBord";
import AddExpence from "./components/AddExpence";
import EditExpence from "./components/EditExpence";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

export const history = createBrowserHistory();
function App() {
  return (
    <div className="">
      {
        <Router history={history}>
          <Switch>
            <Route path="/" component={Login} exact={true} />

            <PrivateRoute path="/dashboard" component={ExpenDashBord} />
            <PrivateRoute path="/create" component={AddExpence} />
            <PrivateRoute path="/edit/:id" component={EditExpence} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
