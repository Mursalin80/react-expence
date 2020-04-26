import React from "react";
import ReactDOM from "react-dom";
import App, { history } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { startSetExpances, logout, login } from "./redux/action";
import { firebase } from "./firebase/firebase";

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <div className="">
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  </div>,
  document.getElementById("root")
);

let hasRender = false;

const renderApp = () => {
  if (!hasRender) {
    ReactDOM.render(
      <React.StrictMode>{jsx}</React.StrictMode>,
      document.getElementById("root")
    );
    hasRender = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log(user.providerData[0]);
    store.dispatch(login(user.providerData[0]));
    store.dispatch(startSetExpances()).then(() => {
      renderApp();
    });
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
