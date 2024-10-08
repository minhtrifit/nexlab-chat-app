import { createAction } from "@reduxjs/toolkit";
import { CHAT_TYPE } from "../../types/chat.type";

export const addChat = createAction<CHAT_TYPE>("chats/addChat");
export const updateChat = createAction<CHAT_TYPE[]>("chats/updateChat");
