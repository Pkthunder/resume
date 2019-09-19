import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const SectionItem = (props) => (
  <React.Fragment>
    <div>&nbsp;
      {props.subheader && (<Header size="medium" color="blue" floated="left">{props.subheader}</Header>)}
      {props.date && (<Header size="medium" color="blue" floated="right">{props.date}</Header>)}
    </div>
    <Header size="small" dividing>{props.desc}</Header>
    {props.children}
  </React.Fragment>
);

const Section = props => {
  return (
    <Segment className="section">
      <Header size="huge" color="blue">{props.header}</Header>
      {props.children}
    </Segment>
  );
};

Section.Item = SectionItem;

export default Section;