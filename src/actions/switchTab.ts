import { Actions, ActionWithPayload, TabActions } from './actions.model';

export function switchTab(payload: TabActions): ActionWithPayload<Actions, TabActions> {
  return {
    type: 'SWITCH_TAB',
    payload: payload,
  };
}
