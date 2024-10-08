import { createReducer } from "@reduxjs/toolkit";
import {
  updateIsOpenDrawer,
  updateIsOpenFriendDrawer,
  updateUserProfile,
} from "../actions/users.action";
import { USER_TYPE } from "../../types/user.type";
import { FRIENDS_DATA } from "../../utils/utils";

// Reducer InitialState interface declair
interface UserState {
  currentUser: USER_TYPE | null;
  friends: USER_TYPE[];
  isOpenDrawer: boolean;
  isOpenFriendDrawer: boolean;
}

// InitialState value
const initialState: UserState = {
  currentUser: { id: "1", name: "Lê Minh Trí" },
  friends: FRIENDS_DATA,
  isOpenDrawer: false,
  isOpenFriendDrawer: false,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateUserProfile, (state, action) => {
      const newUserData: any = action?.payload;
      console.log("DATA:", newUserData);
      state.currentUser = newUserData;
    })
    .addCase(updateIsOpenDrawer, (state, action) => {
      const value: any = action?.payload;
      console.log("IS OPEN DRAWER VALUE:", value);
      state.isOpenDrawer = value;
    })
    .addCase(updateIsOpenFriendDrawer, (state, action) => {
      const value: any = action?.payload;
      console.log("IS OPEN FRIEND DRAWER VALUE:", value);
      state.isOpenFriendDrawer = value;
    });
});

export default userReducer;
