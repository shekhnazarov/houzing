import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as trash } from "../../assets/icons/trash.svg";

const Container = styled.div`
  padding: var(--paddingPrimary);
  max-width: 1440px;
  width: 100%;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const AntTabel = styled.table`
  margin-top: 32px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid var(--border-color, #e6e9ec);
  background: var(--color-5, #fff);
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
  padding: 24px 30px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .listing-title {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    width: 100%;
    max-width: 450px;
  }

  .action {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
  }

  .status {
    display: flex;
    justify-content: center;
    width: 140px;
  }
  .view {
    display: flex;
    justify-content: center;
    width: 50px;
  }

  .data-published {
    width: 100px;
    display: flex;
    justify-content: center;
  }
  .thead,
  .tbody {
    width: 100%;
  }
`;

AntTabel.Th = styled.th`
  color: var(--color-2, #0d263b);
  /* Paragraph/Large/Semibold */
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

AntTabel.Td = styled.td`
  color: var(--text-color, #696969);
  /* Paragraph/Small/Regular */
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

AntTabel.Tr = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

Content.PriceSale = styled.h5`
  color: var(--text-color, #696969);
  /* Paragraph/XSmall/Special/Strikethrough */
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  text-decoration: line-through;
`;

const Icons = styled.div``;
Icons.Edit = styled(edit)`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  cursor: pointer;
`;
Icons.Delete = styled(trash)`
  width: 35px;
  height: 35px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: var(--bg-1, #f6f8f9);
  cursor: pointer;

  &:hover {
    & path {
      fill: red;
    }
  }
`;

const Image = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 3px;
  background: #c4c4c4;
`;

const ForSale = styled.div`
  width: 70px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: var(--color-2, #0d263b);
  color: var(--color-5, #fff);
  font-family: Cerebri Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 12px;
`;

const Featured = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 70px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: var(--color-1, #0061df);
  color: var(--color-5, #fff);
  font-family: Cerebri Sans;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export {
  Container,
  Wrapper,
  AntTabel,
  Content,
  Icons,
  Image,
  ForSale,
  Featured,
};
