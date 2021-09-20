import * as React from 'react';

import './App.scss';
import logo from './Logo.svg';
import { Filter } from './Filter';
import { Tabs } from './Tabs';
import { TicketList } from './TicketList';
import { Button } from './Button';
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
