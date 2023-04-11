import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const tasksInitialState = [];

const contactsSlice = createSlice({
  name: "contact",
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


