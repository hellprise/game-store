import React from 'react';

import { Button } from '../button/button';
import { CartItem } from '../cart-item';

import { calcTotalPrice } from '../../utils';

import './cart-menu.css';

export const CartMenu = ({ items, onClick }) => {
  return (
    <div className="cart-menu">
      <div className="cart-menu__games-list">
        {!!items.length
          ? items.map((game) => (
              <CartItem price={game.price} title={game.title} id={game.id} key={game.title} />
            ))
          : 'Корзина пуста'}
      </div>
      {!!items.length && (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого: </span>
            <span>{calcTotalPrice(items)} uah</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            let's go
          </Button>
        </div>
      )}
    </div>
  );
};
