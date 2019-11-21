import { createStore, applyMiddleware } from "redux";
import { reducer, autoCloseEpic } from "./Notification/state";
import { createEpicMiddleware } from "redux-observable";
import { logger } from "redux-logger";

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  reducer,
  applyMiddleware(logger, epicMiddleware)
);

epicMiddleware.run(autoCloseEpic);
