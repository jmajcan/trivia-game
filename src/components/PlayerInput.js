import React from 'react';
import PlayerIcon from '../images/player-icon.png';

const PlayerInput = ({ name, score, setName, setScore }) => {
  const onChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="player-input">
      <input
        type="text"
        value={name}
        onChange={onChange}
      />
      <img src={PlayerIcon} alt="PlayerIcon" />
      <div className="player-score">
        <button onClick={() => {setScore('sub')}} className="minus"> - </button>
        <label>${score}</label>
        <button onClick={() => {setScore('add')}} className="plus"> + </button>
      </div>
    </div>
  )
};

export default PlayerInput;
