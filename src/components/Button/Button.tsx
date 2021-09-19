import * as React from 'react';
import { Button as Btn } from '@material-ui/core';

import './Button.scss';

interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <Btn variant="contained" fullWidth={true} size="large" color="primary">
      Показать еще 5 билетов
    </Btn>
  );
}
