import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTickets, fetchToken } from './ticketsAPIs';
import { StoreModel, TicketData } from '../../app';

export interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

export const getTickets = createAsyncThunk('ticketList/fetchTickets', async (token: string) => {
  const data = await fetchTickets(token);
  return data;
});

export const getToken = createAsyncThunk('ticketList/fetchToken', async () => {
  const data = await fetchToken();
  return data.searchId;
});

const initialState: TicketData = {
  status: 'idle',
  isFinished: false,
  token: null,
  tickets: [],
};

const ticketsSlice = createSlice({
  name: 'ticketList/tickets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTickets.pending, (state) => {
        state.status = state.tickets.length ? 'idle' : 'loading';
      })
      .addCase(getTickets.fulfilled, (state, { payload: { stop, tickets } }) => {
        state.status = 'idle';
        state.tickets.push(...tickets);
        state.isFinished = stop;
      })
      .addCase(getToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getToken.fulfilled, (state, { payload }) => {
        state.token = payload;
      });
  },
});

export const selectTicketsData = (state: StoreModel) => state.ticketsData;

const { actions, reducer } = ticketsSlice;

export const {} = actions;
export default reducer;
