import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/CronParser.jpg';
import BtwApp from './Images/BTW.png';
import ShoppingCart from './Images/ShoppingCart.jpg'

// import RailsImg from './Images/rails.svg'
// import Ruby from './Images/ruby.svg'
// import ReactI from './Images/react.svg'
// import Js from './Images/javascript.svg'
// import Redux from './Images/redux.svg'
// import Kotlin from './Images/kotlin.svg'

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working from last 2 years. Most of the projects are private but more 
            open source projects <u>coming soon</u>
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Cron Parser."
            img={MsgBoardImg}
            tech="js css react"
            link="https://cronparser.herokuapp.com/"
            repo="https://github.com/sandeshbodake/cron"
          >
            <small>
              Build Using ReactJs
            </small>
            <p>
              This App will translate AWS Cloudwatch, Unix and Google Cloudwatch cron expression into human readable form.
            </p>
          </Project>
          
          <Project
            title="Shopping Cart Application"
            img={ShoppingCart}
            tech=""
            link="https://shopping-cart-app-rails.herokuapp.com/"
            repo="https://github.com/sandeshbodake/shopping-cart-application"
          >
            <small>
              Build Using Ruby on Rails
            </small>
            <p>
              This Application is just for fun. you can login with fake email and checkout its functionalities.
            </p>
          </Project>

          <Project
            title="BTW CRM."
            img={BtwApp}
            tech="js css react ruby"
            link="#"
            repo="#"
          >
            <small>
              Build Using Ruby, Ruby on Rails, JavaScript, PostgreSql
            </small>
            <p>
              This app keep a track enquiries coming from Customer. Basically It's CRM (Customer Relational Model) i worked on it 
              almost 1 year and  we solve many problems.
            </p>
          </Project>
         </div>
      </div>
    </section>
  );
};

export default Projects;
