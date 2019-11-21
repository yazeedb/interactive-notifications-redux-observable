import React from "react";
import { connect } from "react-redux";
import { actions } from "./state";

const withRedux = connect(state => state, actions);

export const Notification = withRedux(
  ({ show, message, type, close, pauseClose, continueClose }) => {
    const baseClassName = `notification ${type}`;

    return (
      <div
        className={show ? baseClassName : `${baseClassName} fade-out`}
        onClick={() => {
          close();
        }}
        onMouseEnter={pauseClose}
        onMouseLeave={() => {
          if (show === false) {
            return;
          }

          continueClose();
        }}
      >
        <p>{message}</p>
      </div>
    );
  }
);
