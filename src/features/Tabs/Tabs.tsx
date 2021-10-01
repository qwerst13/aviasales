import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core';

import { TabActions } from '../../app';
import { switchTab, selectActiveTab } from './activeTabSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import './Tabs.scss';

export function Tabs() {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newTab: TabActions) => dispatch(switchTab(newTab));

  return (
    <ToggleButtonGroup color="primary" value={activeTab} exclusive onChange={handleChange} fullWidth={true}>
      <ToggleButton value="CHEAPEST">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
      <ToggleButton value="FASTEST">САМЫЙ БЫСТРЫЙ</ToggleButton>
      <ToggleButton value="OPTIMAL">ОПТИМАЛЬНЫЙ</ToggleButton>
    </ToggleButtonGroup>
  );
}
