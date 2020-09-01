import React from 'react';
import { useHistory } from "react-router-dom";

import ListItem from '../../components/ListItem';

const List = ({list}) => {
  let history = useHistory();
  const handleProductCode = (e, url) => {
    e.preventDefault()
    history.push('/product/' + url);
  }

  return (
    <ul className="list">
      {list.map(item => <ListItem item={item} 
        key={item.sku}
        onClick={(e) => handleProductCode(e, item.url)}
        />
      )} 
    </ul>
  )
}

export default List;