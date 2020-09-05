/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";

const About = (props) => {
  const myBirthDate = "12/10/1997"

  const mediumLink = () => {
    return (
      <a
        id="profile-link"
        href="https://medium.com/@sandeshbodake121"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's Medium Profile"
      >
        {" "}
        <i className="fab fa-medium" />
      </a>
    );
  };

  const calculateAge = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1);
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  };

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
              I am {calculateAge(myBirthDate)} year old, Software Engineer at{" "}
              <a href="https://scalereal.com/" target="_blank">
                ScaleReal Technologies
              </a>
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty
              and easy to use. I can't stop learning new things; the more, the
              better.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the backend I usually work with Ruby on Rails which is a Ruby
              framework, ReactJS for frontend. Hands on Postgres and MySql like
              relational databases and also on MongoDB which is non relational
              database.
            </p>
            <p>
              For the front-end I usually work with Javascript, either
              standalone or including popular frameworks like ReactJS. I also
              make the web pretty by using CSS using any of their friends:
              Bootstrap, Material Design, etc.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">My Hobbies.</h4>
            <p>
              I Like writing technical blogs, you can view my blogs through
              medium {mediumLink}. creating cool websites, you can ping me
              anytime if you have any idea.
            </p>
            <p>
              I also like watching movies and big fan of Game Of thrones, Harry
              Potter and so on my list is big :). I Love playing Cricket,
              Football and chess.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
