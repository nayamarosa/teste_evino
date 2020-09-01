import React, { useState, useEffect } from 'react';

import ListContext from './';

const ListProvider = ({children}) => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        await fetch('https://api.evino.com.br/catalog/v2/product')
        .then((res) => res.json())
        .then(data => setList(data.data.products));
      } catch (e) {
        console.error(e);
        throw "Serviço indisponível, tente novamente mais tarde"
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