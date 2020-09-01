import React, { useContext } from 'react';

import { ListContext } from '../../containers/Context';
import Loading from '../../components/Loading';
import List from '../../containers/List';

const Home = () => {
  const list = useContext(ListContext);
  console.log(list)

  return (
    <main className="container">
      {
        list === []
        ? <Loading />
        : <List list={list}/>
      }
    </main>
  )
}

export default Home;