import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  background: #fff;
`;

const Wrapper = styled.div`
  margin: 64px 0;
  display: flex;
  flex-direction: column;
  max-width: 580px;
  width: 100%;
  padding: 24px 30px 48px;
  background: #fff;
  border: 1px solid var(--border-color, #e6e9ec);
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
  gap: 30px;
`;

const Info = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-left: auto;
`;

const Link = styled(NavLink)`
  color: #0061df;
`;

export { Container, Wrapper, Info, Link };
