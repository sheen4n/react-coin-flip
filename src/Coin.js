import React from 'react';
import './Coin.css';

const Coin = ({ status }) => {
  if (status == null) return null;

  return (
    <div className='Coin'>
      <img src={require(`./assets/images/${status}.jpg`)} alt='coin' />
    </div>
  );
};

export default Coin;
