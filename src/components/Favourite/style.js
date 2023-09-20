import styled from "styled-components";

const Container = styled.div`
  padding: var(--paddingPrimary);
  max-width: 1440px;
  width: 100%;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .nodata {
    font-size: 24px;
    font-weight: 500;
    margin-top: 32px;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
  grid-auto-flow: dense;
  width: 100%;
  margin: 32px auto;
`;

export { Wrapper, Container };
