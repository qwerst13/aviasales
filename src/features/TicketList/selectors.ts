import { createSelector } from 'reselect';

import { StoreModel } from '../../app';
import { TicketInterface } from '../../common/TicketInterface';

import { selectActiveTab } from '../Tabs/activeTabSlice';
import { selectFilterCheckboxes } from '../Filter/filterCheckboxesSlice';

export const selectTickets = (state: StoreModel) => state.ticketsData.tickets;
export const selectShownQty = (state: StoreModel) => state.shownQty;

const selectTicketsByCheckboxes = createSelector([selectFilterCheckboxes, selectTickets, selectActiveTab, selectShownQty], (checkboxes, tickets) => {
  return tickets.filter((ticket) => {
    const [forth, back] = ticket.segments;
    return checkboxes[forth.stops.length] && checkboxes[back.stops.length];
  });
});

function sortByPrice(tickets: TicketInterface[]) {
  return tickets.sort(({ price: aPrice }, { price: bPrice }) => {
    if (aPrice > bPrice) return 1;
    if (aPrice < bPrice) return -1;
    else return 0;
  });
}

function sortByTime(tickets: TicketInterface[]) {
  return tickets.sort(({ segments: [aForth, aBack] }, { segments: [bForth, bBack] }) => {
    const aDuration = aForth.duration + aBack.duration;
    const bDuration = bForth.duration + bBack.duration;

    if (aDuration > bDuration) return 1;
    if (aDuration < bDuration) return -1;
    else return 0;
  });
}

const selectTicketsByTab = createSelector([selectActiveTab, selectTicketsByCheckboxes, selectShownQty], (tab, tickets, quantity) => {
  switch (tab) {
    case 'FASTEST':
      return sortByTime(tickets);
    case 'CHEAPEST':
      return sortByPrice(tickets);
    case 'OPTIMAL':
      return sortByTime(sortByPrice(tickets).slice(0, quantity));
  }
});

export const selectResultTickets = createSelector([selectTicketsByTab, selectShownQty], (tickets, quantity) => {
  return tickets.slice(0, quantity);
});

export const selectStatus = (state: StoreModel) => state.ticketsData.status;
export const selectIsFinished = (state: StoreModel) => state.ticketsData.isFinished;
export const selectToken = (state: StoreModel) => state.ticketsData.token;
