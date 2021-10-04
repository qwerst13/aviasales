import { useEffect, useMemo } from 'react';
import { CircularProgress } from '@material-ui/core';

import { Ticket } from './Ticket';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getTickets, getToken, selectTicketsData } from './ticketsSlice';
import { selectActiveTab } from '../Tabs/activeTabSlice';
import { selectFilterCheckboxes } from '../Filter/filterCheckboxesSlice';

import './TicketList.scss';

export function TicketList() {
  const dispatch = useAppDispatch();
  const { token, status, isFinished, tickets } = useAppSelector(selectTicketsData);
  const tab = useAppSelector(selectActiveTab);
  const checkboxes = useAppSelector(selectFilterCheckboxes);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token === null || isFinished) return;
    dispatch(getTickets(token));
  }, [token, tickets]);

  function showNTickets(count: number, ticketsArr: typeof tickets): JSX.Element[] {
    return ticketsArr.slice(0, count).map((ticket) => {
      return <Ticket key={`${ticket.price}${ticket.carrier}`} data={ticket} />;
    });
  }

  const content = useMemo(() => showNTickets(5, tickets), [status, tab, checkboxes]);
  const loader = (
    <div className="loaderContainer">
      <CircularProgress />
    </div>
  );
  return <>{status === 'loading' ? loader : content}</>;
}
