import React, { useState } from 'react';

const SingleGame = () => {
  const [userSelection, setUserSelection] = useState(0);
  const userSelectionFunction = (param) => {
    setUserSelection(param);
  };
  return (
    <div className="sg-container padding-top">
      <div className="computer-side">
        <h1>
          <span>L</span>
          <span>E</span>
          <span>T</span>
          <span>'</span>
          <span>S</span>
          <span id="whitespace"></span>
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>Y</span>
          <span>!</span>
        </h1>
      </div>
      <div className="v-line"></div>
      <div className="user-side">
        <div className="symbols-container">
          <div onClick={() => userSelectionFunction('🪨')}>
            <img
              className="gameButton rock"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/raised-fist_270a.png?raw=true"
              alt="Raised fist"
            />
          </div>
          <div>
            <img
              onClick={() => userSelectionFunction('📄')}
              className="gameButton paper"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/hand-with-fingers-splayed_1f590-fe0f.png?raw=true"
              alt="Hand with fingers splayed"
            />
          </div>
          <div>
            <img
              onClick={() => userSelectionFunction('✂️')}
              className="gameButton scissors"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/victory-hand_270c-fe0f.png?raw=true"
              alt="Victory hand"
            />
          </div>
        </div>
        <div>
          <h2>{userSelection}</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
