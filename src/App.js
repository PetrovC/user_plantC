import React from 'react';
import { useRoutes } from 'react-router';
import {Routes} from './Routes'
import './App.css';
import Alertes from './containers/Alertes/Alertes';

function App() {

  const routes = useRoutes(Routes);

  return (
    <>
      <>
      <Alertes/>
      {routes}
      </>
    </>
  );
}

export default App;
