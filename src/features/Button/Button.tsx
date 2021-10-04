import { Button as Btn } from '@material-ui/core';

import './Button.scss';

export function Button() {
  return (
    <Btn variant="contained" fullWidth={true} size="large" color="primary">
      Показать еще 5 билетов
    </Btn>
  );
}
