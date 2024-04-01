import React, { useState } from 'react';
import { FaHeart, FaCheck } from 'react-icons/fa';
import { Button } from '../../atoms';

const HeartButton = ({ initialState, onClick }) => {
  const [liked, setLiked] = useState(initialState);

  const handleClick = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <Button onClick={handleClick}>
      {liked ? <FaCheck color="red" /> : <FaHeart color="red" />}
    </Button>
  );
};

export default HeartButton;
