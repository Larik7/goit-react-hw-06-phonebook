import { createSlice, nanoid } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: "contact",
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contacts => contacts.id === action.payload);
      state.splice(index, 1);
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addContact, deleteContact, } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
