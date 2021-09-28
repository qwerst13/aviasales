import { createSlice } from '@reduxjs/toolkit';
import { StoreModel, TabActions } from '../../app';

const initialState: TabActions = 'CHEAPEST';

const activeTabSlice = createSlice({
  name: 'tabs/activeTab',
  initialState,
  reducers: {
    switchTab: (state, action) => action.payload,
  },
});

export const selectActiveTab = (store: StoreModel) => store.activeTab;

const { actions, reducer } = activeTabSlice;

export const { switchTab } = actions;
export default reducer;
