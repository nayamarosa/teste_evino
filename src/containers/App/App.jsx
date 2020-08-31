import React from 'react';
import './App.scss';

import { ListProvider } from '../Context';
import Header from '../../components/Header';
import List from '../List';
import Footer from '../../components/Footer';

const App = () => (
  <ListProvider>
    <Header />
    <List />
    <Footer />
  </ListProvider>
);

export default App;