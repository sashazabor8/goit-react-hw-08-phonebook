import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signup`, credentials);
    setToken.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/login`, credentials);
    setToken.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async credentials => {
  try {
    await axios.post(`${BASE_URL}/users/logout`, credentials);
    setToken.unset();
  } catch (error) {
    console.log(error);
  }
});

const refreshCurrentUser = createAsyncThunk(
  'auth/refreshCurrentUser',
  async (a, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) return thunkAPI.rejectWithValue();

    setToken.set(persistedToken);

    try {
      const { data } = await axios.get(`${BASE_URL}/users/current`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authOperations = { register, logIn, logOut, refreshCurrentUser };

export default authOperations;
