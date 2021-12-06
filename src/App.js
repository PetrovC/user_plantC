import React from 'react';
import { useRoutes } from 'react-router';
import logo from './logo.svg';
import {Routes} from './Routes'
import './App.css';

function App() {

  const routes = useRoutes(Routes);

  return (
    <>
      <>
      {routes}
      </>
    </>
  );
}

export default App;
