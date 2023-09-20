import React from "react";
import {
  Container,
  Content,
  Wrapper,
  Icons,
  Title,
  Item,
  Text,
  Socials,
} from "./styles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Title>Contact Us</Title>
          <Item>
            <Icons.Location />
            <Text margin="true">
              61 Baxtli Oila ko'chasi, Khazorasp, Khorezm, Uzbekistan.
            </Text>
          </Item>
          <Item>
            <Icons.Call />
            <Text margin="true">97 757 91 51</Text>
          </Item>
          <Item>
            <Icons.Email />
            <Text margin="true">shekhnazarovy@gmail.com</Text>
          </Item>
          <Socials>
            <Item>
              <Icons.Facebook />
            </Item>
            <Item>
              <Icons.Twitter />
            </Item>
            <Item>
              <Icons.Instagram />
            </Item>
            <Item>
              <Icons.Linkedin />
            </Item>
          </Socials>
        </Content>
        <Content>
          <Title>Discover</Title>
          <Text>Chicago</Text>
          <Text>Los Angeles.</Text>
          <Text>Miami</Text>
          <Text>New York</Text>
        </Content>
        <Content>
          <Title>Lists by Category</Title>
          <Text>Apartments</Text>
          <Text>Apartments</Text>
          <Text>Houses</Text>
          <Text>Offices</Text>
          <Text>Retail</Text>
          <Text>Villas</Text>
        </Content>
        <Content>
          <Title>Lists by Category</Title>
          <Text>About Us</Text>
          <Text>Terms & Conditions</Text>
          <Text>Support Center</Text>
          <Text>Contact Us</Text>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Footer;
