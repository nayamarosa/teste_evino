import React from 'react';
import { Link } from "react-router-dom";

const ListItem = ({item, onClick}) => {
  const { images, name, prices } = item

  const formatPrice = (price) => {
    let beforeComma = price.toString().slice(0, -2);
    return `${beforeComma},${price % 100}`;
  }
  
  return (
    <li className='list__item'>
      <Link to="/" onClick={onClick} className='list__item-link'>
        <div className='list__item-image'>
          <img src={images.medium} alt={name}/>
        </div>
        <h2>{name}</h2>
        <p>R$ <span>{formatPrice(prices.recommended)}</span></p>
      </Link>
    </li>
  )
}

export default ListItem;