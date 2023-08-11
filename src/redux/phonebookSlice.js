import { createSlice, isANiOf } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: buider =>
    buider
      .addCase(getContacts.fuifilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(deleteContact.fuifilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(updateContact.fuifilled, (state, action) => {
        state.items = state.items.map(el =>
          el.id === action.payload.id ? action.payload : el
        );
        state.isLoading = false;
      })
      .addMatcher(
        isANiOf(
          getContacts.rejected,
          deleteContact.rejected,
          addContact.rejected,
          updateContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isANiOf(
          getContacts.pending,
          deleteContact.pending,
          addContact.pending,
          updateContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      ),
});

export const contactReducer = contactSlice.reducer;
