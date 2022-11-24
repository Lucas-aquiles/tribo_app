import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
  userType: 'guest' | 'authorized';
  navigation: boolean;
  email?: string | null;
  name?: string | null;
}

const initialState: UserState = {
  userType: 'guest',
  navigation: false,
  email: null,
  name: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    load: (state, action: PayloadAction<UserState>) => {
      state = {...action.payload};
    },
    navigate: (state, action: PayloadAction<boolean>) => {
      state.navigation = action.payload;
    },
  },
});

export const {load, navigate} = userSlice.actions;

export default userSlice.reducer;
