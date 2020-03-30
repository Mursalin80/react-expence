import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import "./redux/store";
import ExpenDashBord from "./components/ExpenDashBord";
import Header from "./components/Header";
import AddExpence from "./components/AddExpence";
import EditExpence from "./components/EditExpence";

function App() {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Header />
        <header className="">
          <Switch>
            <Route path="/" component={ExpenDashBord} exact={true} />
            <Route path="/create" component={AddExpence} />
            <Route path="/edit/:id" component={EditExpence} />

            {/* <Route component={NotFoundPage} /> */}
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
