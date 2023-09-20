import React from "react";
import { Container, Content, Wrapper, Icons } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <h3 className="title">Why Choose Us?</h3>
        <h5 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h5>
      </Content>
      <Wrapper>
        <Content>
          <Icons.Trusted />
          <h3 className="subTitle">Trusted By Thousands</h3>
          <h5 className="info info-margin">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </h5>
        </Content>
        <Content>
          <Icons.Wide />
          <h3 className="subTitle">Wide Renge Of Properties</h3>
          <h5 className="info info-margin">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </h5>
        </Content>
        <Content>
          <Icons.Financing />
          <h3 className="subTitle">Financing Made Easy</h3>
          <h5 className="info info-margin">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </h5>
        </Content>
        <Content>
          <Icons.See />
          <h3 className="subTitle">See Neighborhoods</h3>
          <h5 className="info info-margin">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </h5>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
