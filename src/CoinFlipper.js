import React, { useState } from 'react';
import Coin from './Coin';

const CoinFlipper = () => {
  const [currentStatus, setCurrentStatus] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const handleClick = () => {
    if (Math.round(Math.random()) === 0) {
      setTailsCount(tailsCount + 1);
      setCurrentStatus('tails');
    } else {
      setHeadsCount(headsCount + 1);
      setCurrentStatus('heads');
    }
  };

  return (
    <div>
      <h1>Let's flip a coin!</h1>
      <Coin status={currentStatus} />
      <button onClick={handleClick}>Flip me!</button>
      <p>
        Out of {headsCount + tailsCount} flips, there have been {headsCount}{' '}
        heads and {tailsCount} tails.
      </p>
    </div>
  );
};

export default CoinFlipper;
