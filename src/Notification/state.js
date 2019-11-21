import { createSlice } from "redux-starter-kit";
import { ofType } from "redux-observable";
import { switchMap, delay, takeUntil } from "rxjs/operators";
import { of } from "rxjs";

const initialState = {
  show: false,
  message: null,
  type: null
};

export const { actions, reducer, name } = createSlice({
  name: "notification",
  initialState,
  reducers: {
    open: (_, { payload }) => ({
      show: true,
      type: payload.type,
      message: payload.message
    }),
    close: state => ({
      ...state,
      show: false
    }),
    pauseClose: state => state,
    continueClose: state => state
  }
});

export const autoCloseEpic = action$ => {
  const close$ = action$.pipe(ofType(actions.close.type));
  const pause$ = action$.pipe(ofType(actions.pauseClose.type));

  return action$.pipe(
    ofType(actions.open.type, actions.continueClose.type),
    switchMap(() =>
      of(actions.close()).pipe(
        delay(1000),
        takeUntil(close$),
        takeUntil(pause$)
      )
    )
  );
};
