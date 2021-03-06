import React from 'react';
import './Header.css';

const myResumeLike = "https://drive.google.com/file/d/1YpOgGNo-Cvwbed_MsMVFJz5LDZX_gJyV/view"

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">I am</span>
          <span className="line">Software Developer</span>
        </h1>
        <div className="buttons">
          <a href={myResumeLike} target="_blanck">my resume</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
