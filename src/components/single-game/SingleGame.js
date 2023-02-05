import React, { useState, useEffect } from 'react'; // imported useState and useEffect function from react library
import { useNavigate } from 'react-router-dom'; // used to give access to the navigation objects
import audio from './defeatsound.mp3'; // importing the defeat sound audio

//Functional Programming
const SingleGame = () => {
  // navigating
  const navigate = useNavigate(); //navigating back to the home page automaticaly after the game ends
  // selection variables
  const [userSelection, setUserSelection] = useState('➖'); // getting and setting users choice  .
  const [compSelection, setCompSelection] = useState('➖'); // getting and setting computers choice
  // scores
  const [userScore, setUserScore] = useState(0); // getting and setting user score
  const [compScore, setCompScore] = useState(0); // getting and setting computer score

  // user win state
  const [userWin, setUserWin] = useState(false); //letting the user know if they win or lose the rounds

  // user selection fuction
  const userSelectionFunction = (param) => {
    // when symblos are clicked they are passed through parameter
    setUserSelection(param); // changing userselection to param
    let randomDecimal = Math.random() * 3; // setting a random decimal number that get multiplied by 3
    let randomInteger = Math.floor(randomDecimal); // get Integer number for easy comparison
    // generating values among 0,1,2
    switch (randomInteger) {
      case 0:
        setCompSelection('🪨'); // shows the computer selection
        if (param === '📄') userWinFunc(); // user selects paper and wins
        if (param === '✂️') compWinFunc(); // user selects scissors and losses
        if (param === '🪨') drawFunc(); // same selection by both will result in a draw
        break;
      case 1:
        setCompSelection('📄');
        if (param === '✂️') userWinFunc(); // user selects scissors and wins
        if (param === '🪨') compWinFunc(); // user selects rock and losses
        if (param === '📄') drawFunc(); // same selection by both will result in a draw
        break;
      case 2:
        setCompSelection('✂️');
        if (param === '🪨') userWinFunc(); // user selects rock and wins
        if (param === '📄') compWinFunc(); // user selects paer and losses
        if (param === '✂️') drawFunc(); // same selection by both will result in a draw
        break;

      default:
        break;
    }
  };

  // sounds
  const victorySound = new Audio(
    'https://praxeds.github.io/theodinproject-rock-paper-scissors/assets/audios/correct-choice-43861.mp3'
  );
  const defeatSound = new Audio(audio);

  // win, lose, draw functions
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

  // form state
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rounds: '',
  });

  // handle form change
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOpen(false);
  };
  // This line of code creates a state variable called "finalScoreOpen" and a function to update it called "setfinalOpen"
  const [finalScoreOpen, setfinalOpen] = useState(false);

  // This useEffect hook runs when any of the variables in the dependency array change
  // It checks if the number of rounds specified in the formData is equal to either the userScore or compScore
  // If it is, it sets finalScoreOpen to true and sets a timeout to navigate back to the homepage after 5 seconds
  useEffect(() => {
    if (
      parseInt(formData.rounds) === userScore ||
      parseInt(formData.rounds) === compScore
    ) {
      setfinalOpen(true);
      setTimeout(() => {
        navigate('/');
      }, 10000);
    }
  }, [formData.rounds, userScore, compScore, navigate]);

  // This code renders the game board, including the score display, the symbols for the user and computer's choices, and the form modal for adding player details
  return (
    <div className="padding-top">
      {/*  The outer div has a class "padding-top" */}

      <div
        className="score-container"
        style={{ backgroundColor: userWin === true ? 'green' : 'red' }}
      >
        {/*  The inner div has a class "score-container" and its background color is determined by the value of the variable "userWin" */}
        <h2>Computer</h2>
        {/*  Display the text "Computer" */}

        <h2>{formData.name.length > 0 ? formData.name : 'Player'}</h2>
        {/*  Display the value of the "name" key in the "formData" object, or if it is empty, display the text "Player" */}
      </div>

      <div className="sg-container">
        {/*  The outer div has a class "sg-container" */}

        <div className="computer-side">
          {/*  The inner div has a class "computer-side" */}
          <div className="text-container">
            {/*  The inner div has a class "text-container" */}
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
            {/*  Display the text "LET'S PLAY" */}
          </div>
          <div className="left-emoji">
            <h2>{compSelection}</h2>
            {/*  Display the value of the variable "compSelection" */}
          </div>
          <div className="score-container-left">
            <h2>{compScore}</h2>
            {/*  Display the value of the variable "compScore" */}
          </div>
        </div>

        <div className="user-side">
          {/*  The inner div has a class "user-side" */}
          <div className="symbols-container">
            {/*  The inner div has a class "symbols-container" */}
            <div onClick={() => userSelectionFunction('🪨')}>
              {/*  The inner div has an onClick function that calls the function "userSelectionFunction" with an argument "🪨" */}
              <img
                className="gameButton rock"
                src="https://github.com/praxeds/theodinproject-rock-paper-scissors/blob/main/assets/images/raised-fist_270a.png?raw=true"
                alt="Raised fist"
              />
              {/*  Display an image with a class "gameButton rock" and a source and alt attributes */}
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
