import React from 'react';

import { Button } from '../button/button';

import './game-buy.css';

export const GameBuy = ({ game }) => {
  return (
    <div className="game-buy__price">
      <span>{game.price} uah</span>
      <Button type="primary" size="m">
        buy
      </Button>
    </div>
  );
};
