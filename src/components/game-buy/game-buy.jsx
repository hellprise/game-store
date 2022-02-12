import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';

import { Button } from '../button/button';

import './game-buy.css';

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };

  return (
    <div className="game-buy__price">
      <span>{game.price} uah</span>
      <Button onClick={handleClick} type={isItemInCart ? 'secindary' : 'primary'} size="m">
        {isItemInCart ? 'delete' : 'buy'}
      </Button>
    </div>
  );
};
