import { createAction } from "@reduxjs/toolkit";
import { USER_TYPE } from "../../types/user.type";

export const updateUserProfile = createAction<USER_TYPE>(
  "users/updateUserProfile"
);

export const updateIsOpenDrawer = createAction<boolean>(
  "users/updateIsOpenDrawer"
);
