import * as React from 'react';

import './Ticket.scss';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

interface TicketProps {}

export function Ticket(props: TicketProps) {
  return (
    <Card>
      <CardContent className="card__header">
        <Grid container>
          <Grid item xs={6}>
            <Typography className="price">13 400 P</Typography>
          </Grid>
          <Grid textAlign="right" item xs={6}>
            <img alt="logo" />
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className="card__content">
        <Grid container spacing={2}>
          <Grid className="route" item xs={4}>
            <Typography>MOW - HKT</Typography>
            <Typography>10:45 - 8:00</Typography>
          </Grid>
          <Grid className="length" item xs={4}>
            <Typography>В ПУТИ</Typography>
            <Typography>21ч 15м</Typography>
          </Grid>
          <Grid className="stops" item xs={4}>
            <Typography>2 ПЕРЕСАДКИ</Typography>
            <Typography>HKG, JNB</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid className="route" item xs={4}>
            <Typography>MOW - HKT</Typography>
            <Typography>11:20 - 00:50</Typography>
          </Grid>
          <Grid className="length" item xs={4}>
            <Typography>В ПУТИ</Typography>
            <Typography>13ч 30м</Typography>
          </Grid>
          <Grid className="stops" item xs={4}>
            <Typography>1 ПЕРЕСАДКА</Typography>
            <Typography>HKG</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
