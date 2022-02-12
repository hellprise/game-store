import React from 'react';

import { GameCard } from '../../components/game-card';

import './home-page.css';

import { GAMES } from './games';

export const HomePage = () => {
  return (
    <div className="home-page">
      {GAMES.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </div>
  );
};
