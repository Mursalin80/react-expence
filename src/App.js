import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./firebase/firebase";

import ExpenDashBord from "./components/ExpenDashBord";
import Header from "./components/Header";
import AddExpence from "./components/AddExpence";
import EditExpence from "./components/EditExpence";

function App() {
  return (
    <div className="ui container">
      {
        <BrowserRouter>
          <Header />
          <header className="">
            <Switch>
              <Route path="/" component={ExpenDashBord} exact={true} />
              <Route path="/create" component={AddExpence} exact={true} />
              <Route path="/edit/:id" component={EditExpence} />
            </Switch>
          </header>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
