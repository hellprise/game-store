import React from 'react';

import './items-in-cart.css';

export const ItemsInCart = ({ quantity = 0 }) => {
  return !!quantity && <div className="items-in-cart">{quantity}</div>;
};
