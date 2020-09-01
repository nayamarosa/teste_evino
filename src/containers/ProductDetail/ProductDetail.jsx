import React, { useState, useEffect } from 'react';

const ProductDetail = ({productSelected}) => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    let productDetail = productSelected[0];
    setProductDetail(productDetail)
  }, [productSelected])

  const formatPrice = (price) => {
    let beforeComma = price.toString().slice(0, -2);
    return `${beforeComma},${price % 100}`;
  }

  console.log(productDetail)
  
  return (    
    <>
    {
      productDetail !== undefined 
      ? <section className="product">
          <div className="product__image">
            {
              productDetail.images !== undefined
              ? <img src={productDetail.images.large} alt={productDetail.name}/>
              : <p>imagem não encontrada</p>
            }
          </div>
          <article className="container product__info">
            <h2>{productDetail.name}</h2>
            {
              productDetail.prices !== undefined
              ? <p>R$ <span>{formatPrice(productDetail.prices.recommended)}</span></p>
              : <p>preço não disponível</p>
            }
            <h3>{productDetail.aboutThisWine}</h3>
            <div className="product__info-location">
              <p>Tipo: <span>{productDetail.type}</span></p>
              {
                productDetail.producer !== undefined
              ? <>
                  <p>Origem: <span>{productDetail.producer.country}</span></p>
                  {/* <img src={productDetail.countries.map(country => country.icon)} alt={productDetail.producer.country}/> */}
                </>
              : <p>produtor desconhecido</p>
              }
            </div>
          </article>
        </section>
      : <p>produto não encontrado</p>
    }
    </>
  )
}

export default ProductDetail;