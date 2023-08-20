import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';

const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async () => {
    try {
      const { data } = await axios.get(`${BASE_URL}/contacts`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const fetchAddContact = createAsyncThunk(
  'contacts/fetchAddContact',
  async credentials => {
    try {
      const { data } = await axios.post(`${BASE_URL}/contacts`, credentials);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const fetchDeleteContact = createAsyncThunk(
  'contacts/fetchDeleteContact',
  async id => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/contacts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const contactsOperation = {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
};

export default contactsOperation;
