import React from 'react';

import ListItem from '../../components/ListItem';

const List = ({list}) => {
  return (
    <ul className="list">
      {list.map(item => <ListItem item={item} 
        key={item.sku} />
      )} 
    </ul>
  )
}

export default List;