import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-sneaker-meia-leve-calce-facil-vr/06/E74-0492-006/E74-0492-006_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/kit-2-pares-tenis-kappa-impact-masculino/04/D24-1981-304/D24-1981-304_zoom1.jpg"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
