import * as React from 'react';
import { format, parseISO, addMinutes } from 'date-fns';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import { TicketInterface, SegmentInfo } from '../../../common/TicketInterface';

import './Ticket.scss';

interface TicketProps {
  data: TicketInterface;
}

export function Ticket({
  data: {
    price,
    carrier,
    segments: [forth, back],
  },
}: TicketProps) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);

  function routeInfo({ date, destination, duration, origin, stops }: SegmentInfo) {
    const formatTime = (time: string) => format(parseISO(time), 'HH:mm');
    const addAndFormat = (time: string, addTime: number) => format(addMinutes(parseISO(time), addTime), 'HH:mm');
    const formatDuration = (min: number) => `${Math.trunc(min / 60)}Ч ${min % 60}М`;
    const formatTransferTitle = ({ length }: typeof stops) => {
      if (length === 0) return 'БЕЗ ПЕРЕСАДОК';
      if (length === 1) return '1 ПЕРЕСАДКА';
      else return `${length} ПЕРЕСАДКИ`;
    };

    return (
      <Grid container spacing={2}>
        <Grid className="route" item xs={4}>
          <Typography>{`${origin} - ${destination}`}</Typography>
          <Typography>{`${formatTime(date)} - ${addAndFormat(date, duration)}`}</Typography>
        </Grid>
        <Grid className="length" item xs={4}>
          <Typography>В ПУТИ</Typography>
          <Typography>{formatDuration(duration)}</Typography>
        </Grid>
        <Grid className="stops" item xs={4}>
          <Typography>{formatTransferTitle(stops)}</Typography>
          <Typography>{stops.join(', ') || '-'}</Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Card>
      <CardContent className="card__header">
        <Grid container>
          <Grid item xs={6}>
            <Typography className="price">{formatCurrency(price)}</Typography>
          </Grid>
          <Grid textAlign="right" item xs={6}>
            <img alt="carrier-logo" src={`https://pics.avs.io/99/36/${carrier}.png`} />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className="card__content">
        {routeInfo(forth)}
        {routeInfo(back)}
      </CardContent>
    </Card>
  );
}
