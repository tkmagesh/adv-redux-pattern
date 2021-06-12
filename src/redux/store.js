import { applyMiddleware, createStore, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import combinedReducers from "./reducers";
import combinedEpics from "./actions";
import { loadState } from "../helpers";
import multiDispatch from "./middleware/multi-dispatch";
import sampleModule from "./middleware/sample-module";
import error from "./middleware/error";

const stateFromLocalStorage = loadState();

const epicMiddleware = createEpicMiddleware(combinedEpics);

const store = createStore(
  combinedReducers,
  stateFromLocalStorage,
  applyMiddleware(epicMiddleware, multiDispatch, ...sampleModule, ...error)
);

export default store;
