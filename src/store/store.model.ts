import { Filter, TabActions } from '../actions/actions.model';

export interface StoreModel {
  activeTab: TabActions;
  checked: Filter;
}
