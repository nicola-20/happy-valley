import React from 'react';
import { Router } from '@reach/router'
import Map from './Map'
import Schedule from './Schedule';
import Social from './Social';
import Info from './Info';

const Main = () => {
  return (
    <main>
      <Router>
        <Map path='/map'/>
        <Schedule path='/schedule' />
        <Social path='/social'/>
        <Info path='info'/>
      </Router>
    </main>
  );
};

export default Main;