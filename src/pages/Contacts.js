import React from 'react';
import {Container, Section, Title1, Title2, ContentList, ContentListItem} from "../styles/Styles";

const Contacts = () => {
  return (
    <Section className="section">
      <Container className="container">
        <Title1 className="title-1">Contacts</Title1>

        <ContentList className="content-list">
          <ContentListItem className="content-list__item">
            <Title2 className="title-2">Location</Title2>
            <p>Moscow, Russia</p>
          </ContentListItem>
          <ContentListItem className="content-list__item">
            <Title2 className="title-2">Telegram / WhatsApp</Title2>
            <p><a href="tel:+79051234567">+7 (905) 123-45-67</a></p>
          </ContentListItem>
          <ContentListItem className="content-list__item">
            <Title2 className="title-2">Email</Title2>
            <p><a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a></p>
          </ContentListItem>
        </ContentList>

      </Container>
    </Section>
  );
};

export default Contacts;
