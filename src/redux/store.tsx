import {configureStore} from '@reduxjs/toolkit';

import userSlice from './slices/userSlice';
import eventSlice from './slices/eventSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    event: eventSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
