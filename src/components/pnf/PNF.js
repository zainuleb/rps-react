import React from 'react';
//Declaring Page not found component
const PNF = () => {
  return (
    <section class="fore-zero padding-top padding-bottom">
      <div class="container">
        <div class="section-wrapper">
          <div class="zero-item">
            <div class="zero-thumb">
              <img src="assets/images/404.png" alt="404" />
            </div>
            <div class="zero-content">
              <h2>Oops! This Page Not Found</h2>
              <p>
                We are Really Sorry But the Page you Requested is Missing
                <i class="icofont-worried"></i>
              </p>
              <a href="index.html" class="default-button reverse-effect">
                <span>
                  Go Back to Home <i class="icofont-double-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PNF;
