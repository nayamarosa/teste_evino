import React, { useContext } from 'react';
import './Home.scss';

import { ListContext } from '../../containers/Context';
import List from '../../containers/List';

const Home = () => {
  const list = useContext(ListContext);

  return (
    <List list={list}/>
  )
}

export default Home;