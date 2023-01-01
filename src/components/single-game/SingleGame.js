import React from 'react';

// eslint-disable-next-line
const gameOptions = [
  {
    type: 'rock',
    losesTo: 'paper',
    emoji: '🪨',
  },
  {
    type: 'paper',
    losesTo: 'scissors',
    emoji: '📄',
  },
  {
    type: 'scissors',
    losesTo: 'rock',
    emoji: '✂️',
  },
];

const SingleGame = () => {
  return (
    <div>
      <section>
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
      </section>

      <div>
        <div>
          <h3>Computer</h3>
          <h2 id="computerScore">0</h2>
        </div>
        <span>X</span>
        <div>
          <h2 id="userScore">0</h2>
          <h3>You</h3>
        </div>
      </div>

      <section>
        <main>
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
        </main>
        <h2 id="chooseOneBtn">Choose one!</h2>
        <h2 id="restartGameBtn" class="noDisplay">
          <a href="https://praxeds.github.io/theodinproject-rock-paper-scissors/">
            Restart Game?
          </a>
        </h2>
      </section>
    </div>
  );
};

export default SingleGame;
