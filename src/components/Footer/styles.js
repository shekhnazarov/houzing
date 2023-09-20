import styled from "styled-components";
import { ReactComponent as location } from "../../assets/icons/location.svg";
import { ReactComponent as call } from "../../assets/icons/callf.svg";
import { ReactComponent as email } from "../../assets/icons/emailf.svg";
import { ReactComponent as facebook } from "../../assets/icons/facebookf.svg";
import { ReactComponent as twitter } from "../../assets/icons/twitterf.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagramf.svg";
import { ReactComponent as linkedin } from "../../assets/icons/linkedinf.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 0 16px;
  background: #0d263b;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  padding: 0 130px;
  margin: auto;
  width: 100%;
  gap: 150px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: var(--color-5, #fff);
  /* Paragraph/Medium/Semibold */
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  margin-bottom: 32px;
`;

const Item = styled(Link)`
  display: flex;
  margin-bottom: 20px;
`;

const Socials = styled.div`
  display: flex;
  gap: 35px;
  align-items: center;
`;

const Text = styled.h5`
  max-width: 260px;
  color: var(--color-5, #fff);
  /* Paragraph/Small/Regular */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: ${({ margin }) => (margin ? "0" : "20px")};
`;

const Icons = styled.div``;
Icons.Location = styled(location)`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;
Icons.Call = styled(call)`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;
Icons.Email = styled(email)`
  width: 18px;
  height: 18px;
  margin-right: 20px;
`;

Icons.Facebook = styled(facebook)`
  width: 8px;
  height: 16px;
  margin-top: 20px;
`;
Icons.Twitter = styled(twitter)`
  width: 16px;
  height: 16px;
  margin-top: 20px;
`;
Icons.Instagram = styled(instagram)`
  width: 16px;
  height: 16px;
  margin-top: 20px;
`;
Icons.Linkedin = styled(linkedin)`
  width: 16px;
  height: 17px;
  margin-top: 20px;
`;

export { Container, Content, Wrapper, Icons, Title, Item, Text, Socials };
