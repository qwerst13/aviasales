import { ActionWithPayload, FilterActions } from './actions.model';
import { Action } from 'redux';

export function changeAll(payload: boolean): ActionWithPayload<FilterActions, boolean> {
  return {
    type: 'CHANGE_ALL',
    payload,
  };
}

export function change0(): Action<FilterActions> {
  return {
    type: 'CHANGE_0',
  };
}

export function change1(): Action<FilterActions> {
  return {
    type: 'CHANGE_1',
  };
}

export function change2(): Action<FilterActions> {
  return {
    type: 'CHANGE_2',
  };
}

export function change3(): Action<FilterActions> {
  return {
    type: 'CHANGE_3',
  };
}
