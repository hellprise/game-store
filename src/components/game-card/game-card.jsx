import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GameCover } from '../game-cover';
import { GameBuy } from '../game-buy';
import { GameGenre } from '../game-genre';

import { setCurrentGame } from '../../redux/games/reducer';

import './game-card.css';

export const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PATH = `/app/${game.title.toLowerCase()}`;

  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(PATH);
  };

  return (
    <div onClick={handleClick} className="game-item">
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        {/* вынести код в отдельный компонент (мб, GameGenresList) 16-20 строки */}
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
