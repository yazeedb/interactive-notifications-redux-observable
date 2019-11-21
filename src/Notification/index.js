import React from "react";
import { connect } from "react-redux";
import { actions } from "./state";

const withRedux = connect(state => state, actions);

const Notification = ({
  show,
  message,
  type,
  close,
  pauseClose,
  continueClose
}) => {
  const baseClassName = `notification ${type}`;

  const continueIfOpen = () => {
    if (show === false) {
      return;
    }

    continueClose();
  };

  return (
    <div
      className={show ? baseClassName : `${baseClassName} fade-out`}
      onClick={() => {
        close();
      }}
      onMouseEnter={pauseClose}
      onMouseLeave={continueIfOpen}
      onTouchStart={pauseClose}
      onTouchEnd={continueIfOpen}
    >
      <p>{message}</p>
    </div>
  );
};

export default withRedux(Notification);
