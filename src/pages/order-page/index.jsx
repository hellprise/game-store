import React from 'react';
import { useSelector } from 'react-redux';

import { OrderItem } from '../../components/order-item';

import { calcTotalPrice } from '../../utils';

import './order-page.css';

export const OrderPage = () => {
  const games = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className="order-page">
      <div className="order-page__left">
        {games.map((game) => (
          <OrderItem game={game} key={game.title} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {games.length} товаров на сумму {calcTotalPrice(games)} uah.
          </span>
        </div>
      </div>
    </div>
  );
};
