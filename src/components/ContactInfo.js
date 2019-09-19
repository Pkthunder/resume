import React from 'react';
import { Segment, List } from 'semantic-ui-react';

const ContactInfo = props => (
  <Segment inverted color="blue">
    <List>
      <List.Item icon="mail" content="jared_perreault@yahoo.com" />
      <List.Item icon="phone" content="(978) 732 4024" />
      <List.Item icon="home" content="269 Harvard St. Apt #7, Cambridge, MA 02139" />
      <List.Item icon="linkedin" content="linkedin.com/in/jaredperreault" />
      <List.Item icon="github" content="https://github.com/pkthunder" />
    </List>
  </Segment>
);

export default ContactInfo;