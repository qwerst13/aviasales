import * as React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

import './Filter.scss';

interface FilterProps {}

type InputValueType = 'all' | 0 | 1 | 2 | 3;

const { useState } = React;

export function Filter(props: FilterProps) {
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false]);

  function handleChange(arg: InputValueType): void {
    if (arg === 'all') setChecked((prevState) => prevState.map((item) => !item));
    else {
      setChecked((prevState) => prevState.map((item, index) => (arg === index ? !item : item)));
    }
  }

  return (
    <Paper className="filter" elevation={3}>
      <Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <FormControlLabel
        control={
          <Checkbox disableRipple={true} checked={checked[0] && checked[1] && checked[2] && checked[3]} onChange={() => handleChange('all')} />
        }
        label="Все"
      />

      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[0]} onChange={() => handleChange(0)} />} label="Без пересадок" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[1]} onChange={() => handleChange(1)} />} label="1 пересадка" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[2]} onChange={() => handleChange(2)} />} label="2 пересадки" />
      <FormControlLabel control={<Checkbox disableRipple={true} checked={checked[3]} onChange={() => handleChange(3)} />} label="3 пересадки" />
    </Paper>
  );
}
