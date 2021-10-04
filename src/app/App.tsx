import './App.scss';
import logo from './Logo.svg';
import { Filter } from '../features/Filter';
import { Tabs } from '../features/Tabs';
import { TicketList } from '../features/TicketList';
import { Button } from '../features/Button';
import { Grid } from '@material-ui/core';

export function App() {
  return (
    <Grid className="app" container>
      <Grid className="header" item xs={12}>
        <a href="/">
          <img alt="logo" src={logo} />
        </a>
      </Grid>

      <Grid className="main" container item spacing={2} xs={12}>
        <Grid className="filter__grid" item>
          <Filter />
        </Grid>

        <Grid className="content__grid" item>
          <Tabs />
          <TicketList />
          <Button />
        </Grid>
      </Grid>
    </Grid>
  );
}
