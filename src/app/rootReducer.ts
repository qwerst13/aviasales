import { combineReducers } from 'redux';

import filterReducer from '../features/Filter/filterCheckboxesSlice';
import tabsReducer from '../features/Tabs/activeTabSlice';
import ticketsReducer from '../features/TicketList/ticketsSlice';

export const rootReducer = combineReducers({
  activeTab: tabsReducer,
  filterCheckboxes: filterReducer,
  ticketsData: ticketsReducer,
});
