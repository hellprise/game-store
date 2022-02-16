import React, { useCallback, useState } from 'react';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { calcTotalPrice } from '../../utils';

import { ItemsInCart } from '../items-in-cart';
import { CartMenu } from '../cart-menu/';

import './cart-block.css';

export const CartBlock = () => {
  // MdShoppingCart - это название второй иконки. можно реализовать, если будет желание, смену иконок, в зависимости от того, есть ли что-то в корзине. если она не пуста, то юзать эту
  const [isVisible, setIsVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const totalPrice = calcTotalPrice(items);

  const isVisibleCart = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = useCallback(() => {
    navigate('/order');
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <MdOutlineAddShoppingCart onClick={isVisibleCart} size={25} className="cart-block__icon" />
      {!!totalPrice && <span className="cart-block__total-price">{totalPrice} uah.</span>}
      {isVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
