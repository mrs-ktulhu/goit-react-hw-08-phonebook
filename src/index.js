import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import contactsReducer from 'redux/contactsSlice';
import filterReducer from 'redux/filter';
import './index.css';

axios.defaults.baseURL =
  'https://65535ad15449cfda0f2e8b81.mockapi.io/contacts/contacts';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook"></BrowserRouter>
      <App />
      <BrowserRouter />
    </Provider>
  </React.StrictMode>
);
