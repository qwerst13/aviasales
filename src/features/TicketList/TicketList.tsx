import { useEffect } from 'react';
import { CircularProgress, Alert } from '@material-ui/core';

import { Ticket } from './Ticket';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTickets, getToken } from './ticketsSlice';
import { selectResultTickets, selectStatus, selectIsFinished, selectToken, selectTickets } from './selectors';

import './TicketList.scss';

export function TicketList() {
  const dispatch = useAppDispatch();
  const shownTickets = useAppSelector(selectResultTickets);
  const tickets = useAppSelector(selectTickets);
  const status = useAppSelector(selectStatus);
  const isFinished = useAppSelector(selectIsFinished);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token === null || isFinished) return;
    dispatch(getTickets(token));
  }, [token, tickets]);

  const content = shownTickets.map((ticket) => <Ticket key={`${ticket.price}${ticket.carrier}`} data={ticket} />);

  const loader = (
    <div className="loaderContainer">
      <CircularProgress />
    </div>
  );
  return <>{status === 'loading' ? loader : content.length === 0 ? <Alert severity="warning">Nothing found</Alert> : content}</>;
}
