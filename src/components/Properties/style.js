import styled from "styled-components";

const Container = styled.div`
  padding: var(--paddingPrimary);
  max-width: 1440px;
  width: 100%;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 32px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
  grid-auto-flow: dense;
`;

export { Wrapper, Container };
