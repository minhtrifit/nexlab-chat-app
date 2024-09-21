import { createReducer } from "@reduxjs/toolkit";
import { addChat, updateChat } from "../actions/chat.actions";
import { CHATS_DATA } from "../../utils/utils";
import { CHAT_TYPE } from "../../types/chat.type";

// Reducer InitialState interface declair
interface ChatState {
  chats: CHAT_TYPE[];
}

// InitialState value
const initialState: ChatState = {
  chats: CHATS_DATA,
};

const chatReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addChat, (state, action) => {
      const newChat: any = action?.payload;
      console.log("CHAT DATA:", newChat);
      state.chats.push(newChat);
    })
    .addCase(updateChat, (state, action) => {
      const newChats: any = action?.payload;
      console.log("CHATS DATA:", newChats);
      state.chats = newChats;
    });
});

export default chatReducer;
