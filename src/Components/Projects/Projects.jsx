import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/CronParser.jpg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of <u>most</u> of the projects I've been working from last 2 years. Most of the projects are private but more 
            open souce projects <u>coming soon</u>
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
         </div>
      </div>
    </section>
  );
};

export default Projects;
