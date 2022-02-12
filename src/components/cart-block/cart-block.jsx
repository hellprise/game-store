import React from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';

import './cart-block.css';

export const CartBlock = () => {
  // MdShoppingCart - это название второй иконки. можно реализовать, если будет желание, смену иконок, в зависимости от того, есть ли что-то в корзине. если она не пуста, то юзать эту
  return (
    <div className="cart-block">
      <MdOutlineAddShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">123 uah</span>
    </div>
  );
};
