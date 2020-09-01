import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";

import { ListContext } from '../../containers/Context';

const Product = () => {
  const list = useContext(ListContext);
  const [productSelected, setproductSelected] = useState([]);

  let location = useLocation();
  useEffect(() => {
    let pathname = location.pathname;
    let productUrl = pathname.split("/")[2];
    const filter = list.filter((item) => item.sku.includes(productUrl));
    
    setproductSelected(filter)     
  }, [location.pathname, products])

  return (
    <main className="container">
      <ProductDetail productSelected={productSelected}/>
    </main>
  )
}

export default Product;