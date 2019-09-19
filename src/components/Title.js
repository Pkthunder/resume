import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

const Title = props => (
  <div>
    <Segment compact inverted color="blue" padded="hor">
      <Header size="large">Jared Perreault</Header>
    </Segment>
    <Header size="huge">Veteran & Fullstack Engineer</Header>
  </div>
);

export default Title;