import * as React from 'react';

import './App.scss';
import logo from './Logo.svg';
import { Filter } from './Filter';
import { Tabs } from './Tabs';
import { TicketList } from './TicketList';
import { Button } from './Button';

export function App() {
  return (
    <div className="app">
      <header>
        <a href="/">
          <img alt="logo" src={logo} />
        </a>
      </header>

      <main>
        <aside>
          <Filter />
        </aside>

        <section>
          <Tabs />
          <TicketList />
          <Button />
        </section>
      </main>
    </div>
  );
}
