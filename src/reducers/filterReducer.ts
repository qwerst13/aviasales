import { initialStore } from '../store';
import { ActionWithPayload, Filter, FilterActions } from '../actions/actions.model';

type FilterReducerActionType = ActionWithPayload<FilterActions, boolean>;

export function filterReducer(checked = initialStore.checked, action: FilterReducerActionType): Filter {
  switch (action.type) {
    case 'CHANGE_ALL':
      return [action.payload, action.payload, action.payload, action.payload];
    case 'CHANGE_0':
      return [!checked[0], checked[1], checked[2], checked[3]];
    case 'CHANGE_1':
      return [checked[0], !checked[1], checked[2], checked[3]];
    case 'CHANGE_2':
      return [checked[0], checked[1], !checked[2], checked[3]];
    case 'CHANGE_3':
      return [checked[0], checked[1], checked[2], !checked[3]];
    default:
      return checked;
  }
}
