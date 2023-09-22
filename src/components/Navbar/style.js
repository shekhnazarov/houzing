import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import { ReactComponent as login } from "../../assets/icons/login.svg";
import { ReactComponent as nav } from "../../assets/icons/nav.svg";
import { ReactComponent as close } from "../../assets/icons/Frame.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebookf.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitterf.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagramf.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedinf.svg";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .modal-active{
    display: none !important;
  }
`;

const Main = styled.div`
  display: flex;
  position: sticky;
  z-index: 999;
  top: 0;
  flex-direction: column;
  justify-content: center;
  background-color: var(--colorPrimary);

  /* @media screen and (max-width: 680px){
    height: 100vh;
  } */
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

  .nav__login-res {
    display: none;
  }

  .nav__burger {
    display: none;
  }

  .response__menu {
    background-color: #fff;
  }

  @media screen and (max-width: 680px) {
    padding: 0 16px;
    .nav-menu {
      display: none;
    }
    .nav__login-res {
      display: block;
    }

    .nav__burger {
      display: block;
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Responsemenu = styled.div`
  display: ${({disp}) => disp ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  height: calc(100vh - 64px);

  .response__menu{
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;

  .active {
    color: var(--colorActive);


    @media screen and (max-width: 680px){
      color: #3866ab;
    }
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

  @media screen and (max-width: 680px) {
    color: var(--text-1, #0d263b);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    margin-bottom: 24px;
  }
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

const Socials = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;

const Icons = styled.div``;
Icons.Login = styled(login)`
  width: 20px;
  height: 20px;
`;

Icons.Nav = styled(nav)`
  width: 20px;
  height: 16px;
`;

Icons.Close = styled(close)`
    width: 32px;
    height: 36px;
  & path{
    fill: white;
  }
`;

Icons.Facebook = styled(facebook)`
  width: 12px;
  height: 20px;
  margin-top: 20px;
  & path {
    fill: #0D263B;
  }
`;
Icons.Twitter = styled(twitter)`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  & path {
    fill: #0D263B;
  }
`;
Icons.Instagram = styled(instagram)`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  & path {
    fill: #0D263B;
  }
`;
Icons.Linkedin = styled(linkedin)`
  width: 20px;
  height: 20px;
  margin-top: 20px;
  & path {
    fill: #0D263B;
  }
`;

export {
  Container,
  Main,
  Wrapper,
  Section,
  Logo,
  Link,
  LogoText,
  Menu,
  Icons,
  Responsemenu,
  Socials
};
