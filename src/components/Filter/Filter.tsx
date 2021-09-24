import * as React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

import './Filter.scss';
import { connect, ConnectedProps } from 'react-redux';
import * as actions from '../../actions';
import { StoreModel } from '../../store/store.model';

type PropsFromRedux = ConnectedProps<typeof connector>;
interface FilterProps extends PropsFromRedux {}

function Filter({ checked, changeAll, change0, change1, change2, change3 }: FilterProps) {
  return (
    <Paper className="filter" elevation={3}>
      <Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple={true}
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            onChange={(e) => changeAll(e.target.checked)}
          />
        }
        label="Все"
      />

      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[0]} onChange={change0} />} label="Без пересадок" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[1]} onChange={change1} />} label="1 пересадка" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[2]} onChange={change2} />} label="2 пересадки" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[3]} onChange={change3} />} label="3 пересадки" />
    </Paper>
  );
}

function mapStateToProps(state: StoreModel) {
  return {
    checked: state.checked,
  };
}

const connector = connect(mapStateToProps, actions);
export default connector(Filter);
