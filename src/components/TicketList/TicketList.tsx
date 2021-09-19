import * as React from 'react';

import { Ticket } from './Ticket';

import './TicketList.scss';

interface TicketListProps {}

export function TicketList(props: TicketListProps) {
  return (
    <>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </>
  );
}
