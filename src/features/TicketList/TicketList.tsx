import { useEffect } from 'react';
import { CircularProgress, Alert, AlertTitle, Button } from '@material-ui/core';

import { Ticket } from './Ticket';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
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

  const empty = (
    <Alert severity="warning">
      <AlertTitle>Nothing found</AlertTitle>No flights found matching your filters
    </Alert>
  );
  const content =
    shownTickets.length && tickets.length ? shownTickets.map((ticket) => <Ticket key={`${ticket.price}${ticket.carrier}`} {...ticket} />) : empty;
  const error = (
    <Alert severity="error">
      <AlertTitle>Something went wrong</AlertTitle>An error has occurred. Try to reload the page.
    </Alert>
  );
  const warning = (
    <Alert severity="warning">
      <AlertTitle>Partial data</AlertTitle>
      Due to internal server error, the data was not received completely (only {tickets.length} tickets found), you can try to load more tickets or
      use partial data.
      <Button variant="outlined" fullWidth={true} onClick={() => dispatch(getTickets(token!))}>
        Try to load more tickets
      </Button>
    </Alert>
  );

  const loader = (
    <div className="loaderContainer">
      <CircularProgress />
    </div>
  );

  const element = (() => {
    switch (status) {
      case 'idle':
        return isFinished ? (
          content
        ) : (
          <>
            {loader}
            {content}
          </>
        );
      case 'loading':
        return isFinished ? error : loader;
      case 'warning':
        return (
          <>
            {warning}
            {content}
          </>
        );
      case 'error':
        return error;
    }
  })();

  return <>{element}</>;
}
