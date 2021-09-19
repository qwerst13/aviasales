import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core';

import './Tabs.scss';

interface TabsProps {}

export function Tabs(props: TabsProps) {
  const [currentTab, setCurrentTab] = React.useState('web');

  function handleChange(event: React.MouseEvent<HTMLElement>, newTab: string) {
    setCurrentTab(newTab);
  }

  return (
    <ToggleButtonGroup color="primary" value={currentTab} exclusive onChange={handleChange} fullWidth={true}>
      <ToggleButton value="web">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
      <ToggleButton value="android">САМЫЙ БЫСТРЫЙ</ToggleButton>
      <ToggleButton value="ios">ОПТИМАЛЬНЫЙ</ToggleButton>
    </ToggleButtonGroup>
  );
}
