import React from 'react';
import { Link } from 'react-router-dom';
//Declaring Page not found component
const PNF = () => {
  return (
    <section className="fore-zero padding-top padding-bottom">
      <div className="container">
        <div className="section-wrapper">
          <div className="zero-item">
            <div className="zero-thumb">
              <img src="assets/images/404.png" alt="404" />
            </div>
            <div className="zero-content">
              <h2>Oops! This Page Not Found</h2>
              <p>
                We are Really Sorry But the Page you Requested is Missing
                <i className="icofont-worried"></i>
              </p>
              <Link to={'/'} className="default-button reverse-effect">
                <span>
                  Go Back to Home <i className="icofont-double-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PNF;
