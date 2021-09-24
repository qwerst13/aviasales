export type Actions = 'SWITCH_TAB';

export type TabActions = 'CHEAPEST' | 'FASTEST' | 'OPTIMAL';

export type FilterActions = 'CHANGE_ALL' | 'CHANGE_0' | 'CHANGE_1' | 'CHANGE_2' | 'CHANGE_3';

export type Filter = [boolean, boolean, boolean, boolean];

export interface ActionWithPayload<T = string, U = string> {
  type: T;
  payload: U;
}
