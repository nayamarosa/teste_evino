import React, { useContext } from 'react';

import { ListContext } from '../../containers/Context';
import List from '../../containers/List';

const Home = () => {
  const list = useContext(ListContext);

  return (
    <main className="container">
      <List list={list}/>
    </main>
  )
}

export default Home;