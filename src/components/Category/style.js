import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 96px 130px;
  margin: auto;

  @media screen and (max-width: 480px) {
    padding: 32px 16px;

    .slider-category {
      align-items: center;

      .slick-next {
        display: none !important;
      }

      .slick-prev {
        display: none !important;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    text-align: center;

    .info {
      content: "112 Glenwood Ave Hyde Park, Boston, MA";
    }
  }
`;

export { Container, Content };
