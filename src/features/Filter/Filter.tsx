import * as React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

import { check, checkAll, selectFilterCheckboxes } from './filterCheckboxesSlice';

import './Filter.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export function Filter() {
  const dispatch = useAppDispatch();
  const checked = useAppSelector(selectFilterCheckboxes);

  return (
    <Paper className="filter" elevation={3}>
      <Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple={true}
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            onChange={(e) => dispatch(checkAll(e.target.checked))}
          />
        }
        label="Все"
      />

      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[0]} onChange={() => dispatch(check(0))} />} label="Без пересадок" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[1]} onChange={() => dispatch(check(1))} />} label="1 пересадка" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[2]} onChange={() => dispatch(check(2))} />} label="2 пересадки" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[3]} onChange={() => dispatch(check(3))} />} label="3 пересадки" />
    </Paper>
  );
}
