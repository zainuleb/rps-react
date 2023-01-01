import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
          <div className="brand-logo d-none d-lg-inline-block">
            <div className="logo logo-header">
              <Link to="/" className="active">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="header-menu-part">
            <div className="header-bottom">
              <div className="header-wrapper justify-content-lg-end">
                <div className="mobile-logo d-lg-none">
                  <Link to="/" className="active">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="menu-area">
                  <ul className="menu">
                    <li>
                      <Link to="/" className="active">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="active">
                        About
                      </Link>
                    </li>
                  </ul>

                  <div className="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="ellepsis-bar d-lg-none">
                    <i className="icofont-info-square"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
