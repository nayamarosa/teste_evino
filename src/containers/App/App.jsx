import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import { ListProvider } from '../Context';
import Header from '../../components/Header';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const App = () => (
  <ListProvider>
    <BrowserRouter>
      <Header />
        <Routes />
      <Footer />
    </BrowserRouter>
  </ListProvider>
);

export default App;