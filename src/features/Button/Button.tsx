import { Button as Btn } from '@material-ui/core';

import { showMoreTickets } from './shownCountSlice';
import { useAppDispatch } from '../../app/hooks';

import './Button.scss';

export function Button() {
  const dispatch = useAppDispatch();

  return (
    <Btn variant="contained" fullWidth={true} size="large" color="primary" onClick={() => dispatch(showMoreTickets())}>
      Показать еще 5 билетов
    </Btn>
  );
}
