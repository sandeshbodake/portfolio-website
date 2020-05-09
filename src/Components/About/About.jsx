import React from 'react';
import './About.css';

const About = props => {

  const mediumLink = () => {
    return(
      <a
        id="profile-link"
        href="https://medium.com/@sandeshbodake121"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Medium Profile"
      >
        {' '}
      <i className="fab fa-medium" />
    </a>
    )
  }

  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Sandesh.</h4>
            <p>
              I am 22 year old, Software developer from Pune, India
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the backend I usually work with Ruby on Rails which is a Ruby framework, including popular framework like ReactJS. 
              Hands on Postgres and MySql like relational databases and also on MongoDB which is non relational database.
            </p>
            <p>
              For the front-end I usually work with Javascript, either standalone or including popular frameworks like ReactJS. 
              I also make the web pretty by using CSS using any of their friends: Bootstrap, Material Design, etc.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">My Hobbies.</h4>
            <p>
              I Like writting technical blogs, you can view my blogs through medium {mediumLink}. creating cool websites,
              you can ping me anytime if you have any idea.
            </p>
            <p>
              I also like watching movies and big fan of Game Of thrones, Harry Potter and so on my list is big :). I Love playing Cricket, Football and chess. 
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
