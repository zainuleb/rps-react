import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="about-team padding-top padding-bottom">
      <div className="container">
        <div className="section-header">
          <p>-----------</p>
          <h2 className="mb-3">Rock Papaer Scissors</h2>
        </div>
        <ul className="d-flex flex-wrap justify-content-center player-meta mb-0">
          <Link to="single-game">
            <li className="menu-option d-flex align-items-center">
              <span className="left me-3">
                <i className="icofont-game"></i>
              </span>
              <span className="right">Player vs Computer</span>
            </li>
          </Link>
          <Link to="multi-game">
            <li className="menu-option d-flex align-items-center">
              <span className="left me-3">
                <i className="icofont-workers-group"></i>
              </span>
              <span className="right">Player vs Player</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
