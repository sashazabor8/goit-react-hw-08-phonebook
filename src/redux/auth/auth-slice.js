import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshCurrentUser.pending](state) {
      state.isRefreshingCurrentUser = true;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
      state.isRefreshingCurrentUser = false;
    },
    [authOperations.refreshCurrentUser.rejected](state) {
      state.isRefreshingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
