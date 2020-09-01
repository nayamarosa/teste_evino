import React from 'react';
import './ListItem.scss';

import Button from '../../components/Button';

const ListItem = ({item}) => {
  const { images, name, prices } = item
  
  return (
    <li>
      <img src={images.medium} alt={name}/>
      <h2>{name}</h2>
      <p>{prices.recommended}</p>
      <Button />
    </li>
  )
}

export default ListItem;