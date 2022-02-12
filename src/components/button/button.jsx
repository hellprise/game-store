import React from 'react';
import classNames from 'classnames';

import './button.css';

export const Button = ({ onClick, type, size = 's', children }) => {
  const btnClass = classNames({
    btn: true,
    'btn--secondary': type === 'secondary',
    'btn--primary': type === 'primary',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  });

  return (
    <button onClick={onClick} className={btnClass}>
      {children}
    </button>
  );
};
