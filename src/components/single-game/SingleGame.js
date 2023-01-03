import React from 'react';

const SingleGame = () => {
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
      <div class="v-line"></div>
      <div className="user-side">
        <div className="symbols-container">
          <div>
            <img
              class="gameButton rock"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/raised-fist_270a.png?raw=true"
              alt="Raised fist"
            />
          </div>
          <div>
            <img
              class="gameButton paper"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/hand-with-fingers-splayed_1f590-fe0f.png?raw=true"
              alt="Hand with fingers splayed"
            />
          </div>
          <div>
            <img
              class="gameButton scissors"
              src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/victory-hand_270c-fe0f.png?raw=true"
              alt="Victory hand"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGame;
