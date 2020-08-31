import React, { useState, useEffect } from 'react';

import ListContext from './';

const ListProvider = ({children}) => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://demo6507195.mockable.io/burger-queen')
        .then((res) => res.json())
        .then(data => setList(data));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
  
  return (
    <ListContext.Provider value={list}>
      {children}
    </ListContext.Provider>
    )
  }
  
  export default ListProvider; 