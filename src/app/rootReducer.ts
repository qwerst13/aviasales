import { combineReducers } from 'redux';

import filterReducer from '../features/Filter/filterCheckboxesSlice';
import tabsReducer from '../features/Tabs/activeTabSlice';
import ticketsReducer from '../features/TicketList/ticketsSlice';
import shownCountReducer from '../features/Button/shownCountSlice';

export const rootReducer = combineReducers({
  activeTab: tabsReducer,
  filterCheckboxes: filterReducer,
  ticketsData: ticketsReducer,
  shownQty: shownCountReducer,
});
