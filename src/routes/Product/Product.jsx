import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import { ListContext } from '../../containers/Context';

import Loading from '../../components/Loading';
import ProductDetail from '../../containers/ProductDetail';

const Product = () => {
  const list = useContext(ListContext);
  const [productSelected, setproductSelected] = useState({});

  let location = useLocation();
  useEffect(() => {
    let pathname = location.pathname;
    let url = pathname.split("/")[2];
    async function fetchProduct() {
      try {
        await fetch(` https://api.evino.com.br/catalog/v2/product/${url}`)
        .then(response => response.json())
        .then(data => setproductSelected(data.data))
      } catch (e) {
        console.error(e);
        throw "Serviço indisponível, tente novamente mais tarde"
      }
    };
    fetchProduct();
  }, []);

  return (
    <main>
      {
        productSelected === {}
        ? <Loading />
        : <ProductDetail productSelected={productSelected}/>
      }
    </main>
  )
}

export default Product;