import { combineReducers } from 'redux';

import filterReducer from '../features/Filter/filterCheckboxesSlice';
import tabsReducer from '../features/Tabs/activeTabSlice';

export const rootReducer = combineReducers({
  activeTab: tabsReducer,
  filterCheckboxes: filterReducer,
});
