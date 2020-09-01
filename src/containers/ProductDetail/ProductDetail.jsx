import React from 'react';
import { useHistory } from "react-router-dom";

import Button from '../../components/Button/Button';

const ProductDetail = ({productSelected}) => {
  const { images, name, prices, aboutThisWine, type, producer } = productSelected

  const formatPrice = (price) => {
    let beforeComma = price.toString().slice(0, -2);
    return `${beforeComma},${price % 100}`;
  }

  let history = useHistory();
  const handleBackBtn = (e) => {
    e.preventDefault(); 
    history.push('/');
  }
  
  return (    
    <>
    {
      productSelected !== undefined 
      ? <section className="product">
          <div className="product__image">
            {
              images !== undefined
              ? <img src={images.large} alt={name}/>
              : <p>Imagem não encontrada</p>
            }
          </div>
          <article className="container product__info">
            <h2>{name}</h2>
            {
              prices !== undefined
              ? <p>R$ <span>{formatPrice(prices.recommended)}</span></p>
              : <p className="product__info-undefined">Preço não disponível</p>
            }
            <h3>{aboutThisWine}</h3>
            <div className="product__info-location">
              <p>Tipo: <span>{type}</span></p>
              {
                producer !== undefined
              ? <>
                  <p>Origem: <span>{producer.country}</span></p>
                </>
              : <p className="product__info-undefined">Produtor desconhecido</p>
              }
            </div>
          <div className="product__btn-back">
            <Button 
              id="back"
              text="Voltar"
              classNameBtn="btn__primary"
              onClick={(e) => handleBackBtn(e)}
            />
          </div>
          </article>
        </section>
      : <p className="product__not-found">Produto não encontrado</p>
    }
    </>
  )
}

export default ProductDetail;