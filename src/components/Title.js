import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Title = props => (
  <div className="title">
    <Segment compact inverted color="blue" padded>
      <Header size="huge">Jared Perreault</Header>
    </Segment>
    <Segment basic>
      <Header size="huge">Veteran & Fullstack Engineer</Header>
    </Segment>
  </div>
);

export default Title;