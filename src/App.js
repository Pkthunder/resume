import React from 'react';
import { List } from 'semantic-ui-react';

import ContactInfo from './components/ContactInfo';
import Section from './components/Section';
import TechnicalSkills from './components/TechnicalSkills';
import Title from './components/Title';


import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <Title />
      </header>
      <main>
        <div className="main">
          <Section header="Education">
            <Section.Item
              subheader="University of Massachusetts: Lowell"
              date="Sept 2010 - Dec 2016"
              desc="Bachelors of Science: Computer Science"
            />
          </Section>
          <Section header="Amazon Alexa">
            <Section.Item
              subheader="Web Development Engineer, L4"
              date="May 2018 - PRESENT"
              desc="Bachelors of Science: Computer Science"
            />
          </Section>
          <Section header="MITRE Corporation">
            <Section.Item
              subheader="Senior Software Engineer"
              date="Sept 2017 - May 2018"
              desc="Social & Collaboration Department (K83C)"
            >
              <p>Technical Lead on 4 different projects, all of which utilize the
                MEAN Stack (Mongo/ExpressJS/Angular/NodeJS). The KeyTerms project is a
                terminology management application, which was eventually open sourced.
                I built the original client from scratch as an Angular single-page
                app and was heavily involved with the development of the RESTful API.
                I also perform code reviews for the other developers at the end of our sprints. <br />
                Outside of project work, I have assumed the role of the JavaScript (specifically
                Angular) subject matter expert and have given a few tech talks about various
                JavaScript topics to my co-workers.</p>
            </Section.Item>
            <Section.Item
              subheader="Staff Software Engineer"
              date="Jan 2016 - Jan 2017"
              desc="Social & Collaboration Department (K83C)"
            >
              <p>I was the lead developer on 3 projects, 2 of which I eventually became the
                technical lead. All 3 projects utilize the MEAN stack. One of the projects is a live
                corporate-wide web service for matching employees to open jobs. To date, I have
                received two internal awards for this project, one for development and one for
                technical leadership.</p>
            </Section.Item>
            <Section.Item
              subheader="Software Engineering Intern"
              date="May 2015 - Jan 2016"
              desc="Social & Collaboration Department (K83C)"
            >
              <p>As an intern, I investigated the use of the Twitter API as a real-time data source
                for an open source project called GeoQ; a geospatial-based workflow
                management platform originally designed to assist with natural disaster response</p>
            </Section.Item>
          </Section>
          <Section header="Military Service">
            <Section.Item
              subheader="United States Air Force"
              date="July 2010 - July 2017"
              desc="Senior Airman (E4) - Cable Technician"
            >
              <p> As a Cable Technician, I specialize in Telecommunication Technologies, including:
                fiber optic and copper cabling, antennas, satellites, and networking. I have
                received an award from my supervisors; Most Helpful Airman 2012. I also received
                an Air Force Accommodation Medal for consistent high-performance during my
                deployment to Afghanistan in 2014.</p>
            </Section.Item>
          </Section>
        </div>
        <div className="sidebar">
          <ContactInfo />
          <Section header="Technical Skills">
            <TechnicalSkills />
          </Section>
          <Section header="Achievements & Honors">
            <List bulleted>
              <List.Item>Air Force Accommodation Medal</List.Item>
              <List.Item>Afghanistan Campaign Medal</List.Item>
              <List.Item>Combat Veteran - Operation: Enduring Freedom</List.Item>
            </List>
          </Section>
        </div>
      </main>
      <footer>

      </footer>
    </React.Fragment>
  );
}

export default App;
