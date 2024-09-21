import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import chatReducer from "./chat.reducers";

export const rootReducer = combineReducers({
  users: userReducer,
  chats: chatReducer,
});
