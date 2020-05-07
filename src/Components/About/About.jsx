import React from 'react';
import './About.css';

const About = props => {
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
              For the back-end i usually work with Ruby on rails which is Ruby framework, including popular frameworks like ReactJS.
              Hands on Postgres and mySql like relational databases. also on mongoDB which is non relational
            </p>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS. I also make the web pretty by using
              CSS using any of their friends: Bootstrap, Material Design, etc.
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Technology Stack.</h4>

            <h4 className="sub-sub-title">Languages/frameworks</h4>
            
            <div><i class="icon-ruby">Ruby</i> </div>
            <div><i class="icon-ruby-on-rails">Ruby on Rails</i></div>
            <div><i class="icon-php"> PHP</i></div>
            <div><i class="icon-reactjs"> React Js</i></div>
            <div><i class="icon-javascript"> JavaScript</i></div>
            <div><i class="icon-c"> C Language</i></div>

            <h4 className="sub-sub-title">Databases</h4>
            <div><i class="icon-postgres">PostgreSql</i> </div>
            <div><i class="icon-mysql">MySQL</i> </div>
            <div><i class="icon-mongodb">Mongodb</i> </div>

            <h4 className="sub-sub-title">Tools</h4>
            <div><i class="icon-git">Git</i> </div>
            <div><i class="icon-docker">Docker</i> </div>
            <div><i class="icon-heroku">Heroku</i> </div>
            <div><i class="icon-aws">AWS</i> </div>

          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
