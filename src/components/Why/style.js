import styled from "styled-components";
import { ReactComponent as trusted } from "../../assets/icons/tursted.svg";
import { ReactComponent as wide } from "../../assets/icons/wide.svg";
import { ReactComponent as financing } from "../../assets/icons/financing.svg";
import { ReactComponent as see } from "../../assets/icons/see.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 0;
  background: var(--bg-2, #f5f7fc);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1440px;
  padding: 0 130px;
  margin: auto;
  width: 100%;
  gap: 77px;
  margin-top: 40px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  .info-margin {
    margin-top: 8px;
  }
`;

const Icons = styled.div``;
Icons.Trusted = styled(trusted)`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
`;
Icons.Financing = styled(financing)`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
`;
Icons.See = styled(see)`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
`;
Icons.Wide = styled(wide)`
  width: 50px;
  height: 50px;
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icons };
