import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { startSetExpances } from "./redux/action";

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <div className="ui container">
    <div className="ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  </div>,
  document.getElementById("root")
);

store.dispatch(startSetExpances()).then(() => {
  ReactDOM.render(
    <React.StrictMode>{jsx}</React.StrictMode>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
