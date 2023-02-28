import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { toDoReducer } from "./reducer";

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
