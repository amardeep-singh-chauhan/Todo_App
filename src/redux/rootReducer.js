import { combineReducers } from "redux";
import { operationsReducer } from "./todo/reducers/operations";

export const rootReducers = combineReducers({ operationsReducer });
