import * as React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/core';

import './Tabs.scss';
import { connect, ConnectedProps } from 'react-redux';
import { StoreModel } from '../../store/store.model';
import * as actions from '../../actions';
import { TabActions } from '../../actions/actions.model';

type PropsFromRedux = ConnectedProps<typeof connector>;
interface TabsProps extends PropsFromRedux {}

function Tabs({ activeTab, switchTab }: TabsProps) {
  function handleChange(event: React.MouseEvent<HTMLElement>, newTab: TabActions) {
    switchTab(newTab);
  }

  return (
    <ToggleButtonGroup color="primary" value={activeTab} exclusive onChange={handleChange} fullWidth={true}>
      <ToggleButton value="CHEAPEST">САМЫЙ ДЕШЕВЫЙ</ToggleButton>
      <ToggleButton value="FASTEST">САМЫЙ БЫСТРЫЙ</ToggleButton>
      <ToggleButton value="OPTIMAL">ОПТИМАЛЬНЫЙ</ToggleButton>
    </ToggleButtonGroup>
  );
}

function mapStateToProps(state: StoreModel): Partial<StoreModel> {
  return {
    activeTab: state.activeTab,
  };
}

const connector = connect(mapStateToProps, actions);
export default connector(Tabs);
