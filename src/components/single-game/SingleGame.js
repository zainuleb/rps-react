import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import audio from './defeatsound.mp3';

const SingleGame = () => {
  const navigate = useNavigate();
  const [userSelection, setUserSelection] = useState('➖');
  const [compSelection, setCompSelection] = useState('➖');

  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);

  const [userWin, setUserWin] = useState();

  const userSelectionFunction = (param) => {
    setUserSelection(param);
    let randVal = Math.floor(Math.random() * 3);
    switch (randVal) {
      case 0:
        setCompSelection('🪨');
        if (param === '📄') userWinFunc();
        if (param === '✂️') compWinFunc();
        if (param === '🪨') drawFunc();
        break;
      case 1:
        setCompSelection('📄');
        if (param === '✂️') userWinFunc();
        if (param === '🪨') compWinFunc();
        if (param === '📄') drawFunc();
        break;
      case 2:
        setCompSelection('✂️');
        if (param === '🪨') userWinFunc();
        if (param === '📄') compWinFunc();
        if (param === '✂️') drawFunc();
        break;

      default:
        break;
    }
  };

  const victorySound = new Audio(
    'https://praxeds.github.io/theodinproject-rock-paper-scissors/assets/audios/correct-choice-43861.mp3'
  );

  const defeatSound = new Audio(audio);

  const userWinFunc = () => {
    setUserScore(() => userScore + 1);
    setUserWin(() => true);
    victorySound.play();
  };

  const compWinFunc = () => {
    setCompScore(() => compScore + 1);
    setUserWin(() => false);
    defeatSound.play();
  };

  const drawFunc = () => {
    console.log('Draw');
  };

  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rounds: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };

  const [finalScoreOpen, setfinalOpen] = useState(false);

  useEffect(() => {
    if (
      parseInt(formData.rounds) === userScore ||
      parseInt(formData.rounds) === compScore
    ) {
      setfinalOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 5000);
    }
  }, [formData.rounds, userScore, compScore, navigate]);

  return (
    <div className="padding-top">
      <div
        className="score-container"
        style={{ backgroundColor: userWin === true ? 'green' : 'red' }}
      >
        <h2>Computer</h2>
        <h2>{formData.name.length > 0 ? formData.name : 'Player'}</h2>
      </div>
      <div className="sg-container">
        <div className="computer-side">
          <div className="text-container">
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
            </h1>
          </div>
          <div className="left-emoji">
            <h2>{compSelection}</h2>
          </div>
          <div className="score-container-left">
            <h2>{compScore}</h2>
          </div>
        </div>
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
          <div className="right-emoji">
            <h2>{userSelection}</h2>
          </div>
          <div className="score-container-right">
            <h2>{userScore}</h2>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Player Details</h2>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <input
                className="input-form"
                placeholder="Name"
                required
                type="text"
                name="name"
                onChange={handleChange}
              />

              <input
                className="input-form"
                placeholder="Email"
                required
                type="email"
                name="email"
                onChange={handleChange}
              />

              <select
                required
                className="select-form"
                name="rounds"
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select Number of Rounds
                </option>
                <option value="3">3</option>
                <option value="7">7</option>
                <option value="9">9</option>
              </select>
              <br />
              <input className="btn" type="submit" value="Start Game" />
            </form>
          </div>
        </div>
      )}
      {finalScoreOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>
              Winner: {userScore > compScore ? formData.name : 'Computer'}
            </h2>
            <br />
            <br />
            <br />
            <h6>
              Will Redirect to Home Page in <strong>5 Seconds</strong>
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleGame;
