import React from 'react';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <div className="header-holder d-flex flex-wrap justify-content-between align-items-center">
          <div className="brand-logo d-none d-lg-inline-block">
            <div className="logo logo-header">
              <a href="index.html">
                <img src="assets/images/logo/logo.png" alt="logo" />
              </a>
            </div>
          </div>
          <div className="header-menu-part">
            <div className="header-bottom">
              <div className="header-wrapper justify-content-lg-end">
                <div className="mobile-logo d-lg-none">
                  <a href="index.html">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </a>
                </div>
                <div className="menu-area">
                  <ul className="menu">
                    <li>
                      <a href="index.html" className="active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#0">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
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
