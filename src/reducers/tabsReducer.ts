import { initialStore } from '../store';

import { Actions, ActionWithPayload, TabActions } from '../actions/actions.model';

export function tabsReducer(activeTab = initialStore.activeTab, action: ActionWithPayload<Actions, TabActions>) {
  switch (action.type) {
    case 'SWITCH_TAB':
      return action.payload;
    default:
      return activeTab;
  }
}
