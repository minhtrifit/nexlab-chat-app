import { createReducer } from "@reduxjs/toolkit";
import { updateUserProfile } from "../actions/users.action";
import { USER_TYPE } from "../../types/user.type";

// Reducer InitialState interface declair
interface UserState {
  currentUser: USER_TYPE | null;
  friends: USER_TYPE[];
}

// InitialState value
const initialState: UserState = {
  currentUser: { id: "1", name: "Lê Minh Trí" },
  friends: [],
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateUserProfile, (state, action) => {
    const newUserData: any = action?.payload;
    console.log("DATA:", newUserData);
    state.currentUser = newUserData;
  });
});

export default userReducer;
