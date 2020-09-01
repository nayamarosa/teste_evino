import React from 'react';
import './List.scss';

import ListItem from '../../components/ListItem';

const List = ({list}) => {
  return (
    <ul>
      {list.map(item => <ListItem item={item} 
        key={item.sku} />
      )} 
    </ul>
  )
}

export default List;