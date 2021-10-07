import { ToggleButton, ToggleButtonGroup } from '@material-ui/core';

import { TabActions } from '../../app';
import { switchTab, selectActiveTab } from './activeTabSlice';
import { useAppDispatch, useAppSelector } from '../../common/hooks';

import './Tabs.scss';

export function Tabs() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);

  return (
    <ToggleButtonGroup color="primary" value={activeTab} exclusive onChange={(_, newTab: TabActions) => dispatch(switchTab(newTab))} fullWidth={true}>
      <ToggleButton value="CHEAPEST">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
      <ToggleButton value="FASTEST">САМЫЙ БЫСТРЫЙ</ToggleButton>
      <ToggleButton value="OPTIMAL">ОПТИМАЛЬНЫЙ</ToggleButton>
    </ToggleButtonGroup>
  );
}
