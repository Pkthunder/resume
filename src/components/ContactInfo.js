import React from 'react';
import { Segment, List } from 'semantic-ui-react';

const ContactInfo = props => (
  <Segment className="contact-info" inverted color="blue">
    <List>
      <List.Item>
        <List.Icon name="mail" size="large" />
        <List.Content>
          <a href="mailto:jared_perreault@yahoo.com">jared_perreault@yahoo.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="phone" size="large" />
        <List.Content>(978) 732 4024</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="home" size="large" />
        <List.Content>269 Harvard St. Apt #7, Cambridge, MA 02139</List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="linkedin" size="large" />
        <List.Content>
          <a href="https://linkedin.com/in/jaredperreault">linkedin.com/in/jaredperreault</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="github" size="large" />
        <List.Content>
          <a href="https://github.com/pkthunder">github.com/pkthunder</a>
        </List.Content>
      </List.Item>
    </List>
  </Segment>
);

export default ContactInfo;