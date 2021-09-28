import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreModel, Filter } from '../../app';

const initialState: Filter = [false, false, false, false];

const filterCheckboxesSlice = createSlice({
  name: 'filter/filterCheckboxes',
  initialState,
  reducers: {
    check: (state, action: PayloadAction<number>) => {
      state[action.payload] = !state[action.payload];
    },
    checkAll: (state, action: PayloadAction<boolean>) => <Filter>state.map(() => action.payload),
  },
});

export const selectFilterCheckboxes = (store: StoreModel) => store.filterCheckboxes;

const { actions, reducer } = filterCheckboxesSlice;

export const { check, checkAll } = actions;
export default reducer;
