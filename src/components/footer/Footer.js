import React from 'react';

const Footer = () => {
  return (
    <footer class="footer-section">
      <div class="footer-top">
        <div class="container">
          <div class="row g-3 justify-content-center g-lg-0">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src="assets/images/footer/icons/01.png"
                      alt="Phone-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Phone Number : +9290078601</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src="assets/images/footer/icons/02.png"
                      alt="email-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Email : rockpaperscissor@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="footer-top-item lab-item">
                <div class="lab-inner">
                  <div class="lab-thumb">
                    <img
                      src="assets/images/footer/icons/03.png"
                      alt="location-icon"
                    />
                  </div>
                  <div class="lab-content">
                    <span>Address : Frankfurt Oder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer-middle padding-top padding-bottom"
        style={{ backgroundImage: `url(assets/images/footer/bg.jpg)` }}
      >
        <div class="container">
          <div class="row padding-lg-top">
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-middle-item-wrapper">
                <div class="footer-middle-item mb-lg-0">
                  <div class="fm-item-title mb-4">
                    <img src="assets/images/logo/logo.png" alt="logo" />
                  </div>
                  <div class="fm-item-content">
                    <p class="mb-4">--- Content to Write ---</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12"></div>
            <div class="col-lg-4 col-md-6 col-12">
              <div class="footer-middle-item-wrapper">
                <div class="footer-middle-item-3 mb-lg-0">
                  <div class="fm-item-title">
                    <h4>Our Newsletter</h4>
                  </div>
                  <div class="fm-item-content">
                    <form>
                      <div class="form-group mb-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div class="form-group mb-2">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                      <button type="submit" class="default-button">
                        <span>
                          Send Massage <i class="icofont-circled-right"></i>
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="footer-bottom-content text-center">
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
