import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

  extraReducers: builder =>
    builder

      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.items = state.items.map(el =>
          el.id === action.payload.id ? action.payload : el
        );
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
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
        isAnyOf(
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
