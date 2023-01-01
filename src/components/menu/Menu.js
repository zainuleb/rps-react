import React from 'react';

const Menu = () => {
  return (
    <div class="about-team padding-top padding-bottom">
      <div class="container">
        <div class="section-header">
          <p>-----------</p>
          <h2 class="mb-3">Rock Papaer Scissors</h2>
        </div>
        <ul class="d-flex flex-wrap justify-content-center player-meta mb-0">
          <li class="menu-option d-flex align-items-center">
            <span class="left me-3">
              <i class="icofont-game"></i>
            </span>
            <span class="right">Player vs Computer</span>
          </li>
          <li class="menu-option d-flex align-items-center">
            <span class="left me-3">
              <i class="icofont-workers-group"></i>
            </span>
            <span class="right">Player vs Player</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
