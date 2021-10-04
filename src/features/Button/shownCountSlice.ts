import { createSlice } from '@reduxjs/toolkit';

const initialState = 5;

const shownCountSlice = createSlice({
  name: 'button/shownQty',
  initialState,
  reducers: {
    showMoreTickets: (state) => state + 5,
  },
});

const { actions, reducer } = shownCountSlice;

export const { showMoreTickets } = actions;
export default reducer;
