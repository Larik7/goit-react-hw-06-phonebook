import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";
const filtersInitialState = {
  filter: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;