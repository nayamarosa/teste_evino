import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { ListContext } from '../../containers/Context';

import ProductDetail from '../../containers/ProductDetail';

const Product = () => {
  const list = useContext(ListContext);
  const [productSelected, setproductSelected] = useState([]);

  let location = useLocation();
  useEffect(() => {
    let pathname = location.pathname;
    let productUrl = pathname.split("/")[2];
    const filter = list.filter((item) => item.url.includes(productUrl));
    
    setproductSelected(filter)     
  }, [location.pathname, list])

  return (
    <main>
      <ProductDetail productSelected={productSelected}/>
    </main>
  )
}

export default Product;