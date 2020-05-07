import React from 'react';
import './About.css';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div className="about">
    <div>
      <p className="cheers">
        Enjoy your day and a good beer, cheers!
      </p>
      
    </div>
  </div>
);

export default AboutPage;
