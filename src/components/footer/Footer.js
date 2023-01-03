import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <div className="container">
          <div className="row g-3 justify-content-center g-lg-0">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/01.png"
                      alt="Phone-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Phone Number : +9290078601</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/02.png"
                      alt="email-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Email : rockpaperscissor@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="footer-top-item lab-item">
                <div className="lab-inner">
                  <div className="lab-thumb">
                    <img
                      src="assets/images/footer/icons/03.png"
                      alt="location-icon"
                    />
                  </div>
                  <div className="lab-content">
                    <span>Address : Frankfurt Oder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-middle padding-top padding-bottom"
        style={{ backgroundImage: `url(assets/images/footer/bg.jpg)` }}
      ></div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer-bottom-content text-center">
                <p>
                  &copy;2023 <a href="/#">RPS</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
