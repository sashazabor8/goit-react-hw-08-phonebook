import { createSlice } from '@reduxjs/toolkit';

import contactsOperation from './contacts-operations';
import authOperations from 'redux/auth/auth-operations';

const initialState = {
  items: [],
  isFetchAllContactsLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperation.fetchAllContacts.pending](state) {
      state.isFetchAllContactsLoading = true;
    },
    [contactsOperation.fetchAllContacts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isFetchAllContactsLoading = false;
    },
    [contactsOperation.fetchAllContacts.rejected](state) {
      state.isFetchAllContactsLoading = false;
    },
    [contactsOperation.fetchAddContact.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
    },
    [contactsOperation.fetchDeleteContact.fulfilled](state, { payload }) {
      state.items = state.items.filter(({ id }) => id !== payload.id);
    },
    [authOperations.logOut.fulfilled](state, { payload }) {
      state.items = [];
    },
  },
});

export default contactsSlice.reducer;
