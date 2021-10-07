import { Card, CardContent, Grid, Typography, Divider } from '@material-ui/core';

import { TicketInterface } from '../../../common/TicketInterface';
import { DirectionInfo } from './DirectionInfo';

import './Ticket.scss';

interface TicketProps extends TicketInterface {}

export function Ticket({ price, carrier, segments: [forth, back] }: TicketProps) {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(value);

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
      <Divider variant="middle" />
      <CardContent className="card__content">
        <DirectionInfo {...forth} />
        <DirectionInfo {...back} />
      </CardContent>
    </Card>
  );
}
