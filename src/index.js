import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";

import "./styles.css";
import { store } from "./store";
import { actions } from "./Notification/state";
import { Notification } from "./Notification";

const withRedux = connect(null, actions);

const App = withRedux(({ open }) => {
  return (
    <div className="App">
      <Notification />
      <h1>Notification Squad</h1>

      <button
        className="success"
        onClick={() => {
          open({
            type: "success",
            message: "Message success!"
          });
        }}
      >
        Success
      </button>
      <button
        className="info"
        onClick={() => {
          open({
            type: "info",
            message: "Message info!"
          });
        }}
      >
        Info
      </button>
      <button
        className="warning"
        onClick={() => {
          open({
            type: "warning",
            message: "Message warning!"
          });
        }}
      >
        Warning
      </button>
      <button
        className="danger"
        onClick={() => {
          open({
            type: "danger",
            message: "Message danger!"
          });
        }}
      >
        Danger
      </button>
    </div>
  );
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
