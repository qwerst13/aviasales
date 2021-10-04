import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { TicketInterface } from '../common/TicketInterface';

export type TabActions = 'CHEAPEST' | 'FASTEST' | 'OPTIMAL';
export type Filter = [boolean, boolean, boolean, boolean];

export interface TicketData {
  status: 'idle' | 'loading' | 'error';
  isFinished: boolean;
  token: string | null;
  tickets: TicketInterface[];
}

export interface StoreModel {
  activeTab: TabActions;
  filterCheckboxes: Filter;
  ticketsData: TicketData;
  shownQty: number;
}

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
