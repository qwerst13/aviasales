import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export type TabActions = 'CHEAPEST' | 'FASTEST' | 'OPTIMAL';
export type Filter = [boolean, boolean, boolean, boolean];

export interface StoreModel {
  activeTab: TabActions;
  filterCheckboxes: Filter;
}

export const initialStore: StoreModel = {
  activeTab: 'CHEAPEST',
  filterCheckboxes: [false, false, false, false],
};

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
