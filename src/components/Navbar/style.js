import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--colorPrimary);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: var(--paddingPrimary);
  max-width: 1440px;
  margin: auto;
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: var(--colorActive);
  }
`;

const Logo = styled(logo)`
  width: 30px;
  height: 36px;
  color: red;
  margin-right: 12px;
  cursor: pointer;
  & path {
    fill: var(--colorTextPrimary);
  }
`;

const LogoText = styled.h3`
  color: var(--colorTextPrimary);
  cursor: pointer;
`;

const Link = styled(NavLink)`
  color: var(--colorTextPrimary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-decoration: none;
  padding: 0 32px;
`;

const Menu = styled.div`
  background-color: #fff;
  width: 177px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06),
    0px 7px 46px 0px rgba(0, 0, 0, 0.06), 0px 20px 38px 0px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.h4`
  color: #000;
  /* Paragraph/Small/Regular */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

export { Container, Main, Wrapper, Section, Logo, Link, LogoText, Menu };
