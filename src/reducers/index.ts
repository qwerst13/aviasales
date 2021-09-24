import { combineReducers } from 'redux';

import { tabsReducer } from './tabsReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
  activeTab: tabsReducer,
  checked: filterReducer,
});
