import * as React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@material-ui/core';

import './Filter.scss';

interface FilterProps {}

type InputValueType = 'all' | 0 | 1 | 2 | 3;

const { useState } = React;

export function Filter(props: FilterProps) {
  const [checked, setChecked] = useState<boolean[]>([false, false, false, false]);

  function handleChange(arg: InputValueType, event: React.ChangeEvent<HTMLInputElement>): void {
    if (arg === 'all') setChecked(checked.map(() => event.target.checked));
    else {
      setChecked((prevState) => prevState.map((item, index) => (arg === index ? event.target.checked : item)));
    }
  }

  return (
    <Paper className="filter" elevation={3}>
      <Typography>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple={true}
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            onChange={(evt) => handleChange('all', evt)}
          />
        }
        label="Все"
      />

      <FormControlLabel
        control={<Checkbox disableRipple={true} checked={checked[0]} onChange={(evt) => handleChange(0, evt)} />}
        label="Без пересадок"
      />
      <FormControlLabel
        control={<Checkbox disableRipple={true} checked={checked[1]} onChange={(evt) => handleChange(1, evt)} />}
        label="1 пересадка"
      />
      <FormControlLabel
        control={<Checkbox disableRipple={true} checked={checked[2]} onChange={(evt) => handleChange(2, evt)} />}
        label="2 пересадки"
      />
      <FormControlLabel
        control={<Checkbox disableRipple={true} checked={checked[3]} onChange={(evt) => handleChange(3, evt)} />}
        label="3 пересадки"
      />
    </Paper>
  );
}
