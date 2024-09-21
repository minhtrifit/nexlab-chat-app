import { createReducer } from "@reduxjs/toolkit";
import { updateIsOpenDrawer, updateUserProfile } from "../actions/users.action";
import { USER_TYPE } from "../../types/user.type";

// Reducer InitialState interface declair
interface UserState {
  currentUser: USER_TYPE | null;
  friends: USER_TYPE[];
  isOpenDrawer: boolean;
}

// InitialState value
const initialState: UserState = {
  currentUser: { id: "1", name: "Lê Minh Trí" },
  friends: [],
  isOpenDrawer: false,
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
    });
});

export default userReducer;
