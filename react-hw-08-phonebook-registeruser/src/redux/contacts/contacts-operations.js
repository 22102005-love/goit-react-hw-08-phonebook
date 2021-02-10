import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactError,
  addContactRequest,
  addContactSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from './contacts-actions.js';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// const register = userData => dispatch => {
//   dispatch(registerUserRequest());
//   axios
//     .post('/users/signup',userData)
//     .then(({ data }) => dispatch(registerUserSuccess(data)))
//     .catch(error => dispatch(registerUserError(error)));
//   token.set(data.token);
// };
// const login = userData => dispatch => {
//   dispatch(registerUserRequest());
//   axios
//     .post('/users/login',userData)
//     .then(({ data }) => dispatch(loginUserSuccess(data)))
//     .catch(error => dispatch(loginUserError(error)));
//   token.set(data.token);
// };

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = newContact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};
const removeContact = id => dispatch => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};
export default { addContact, removeContact, fetchContacts };
