import { format, parseISO, addMinutes } from 'date-fns';
import { Grid, Typography } from '@material-ui/core';

import { SegmentInfo } from '../../../common/TicketInterface';

export function DirectionInfo({ date, destination, duration, origin, stops }: SegmentInfo) {
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
