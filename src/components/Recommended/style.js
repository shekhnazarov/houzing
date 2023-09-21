import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  padding: 96px 130px 48px;
  margin: auto;

  @media screen and (max-width: 480px) {
    padding: 64px 16px;

    .recommended-slider {
      align-items: center;

      .slick-next {
        display: none !important;
      }

      .slick-prev {
        display: none !important;
      }

      .slick-current {
        display: flex;
        justify-content: center;
      }

      .housecard {
        width: 380px;
      }

      .slick-track {
        gap: 0 !important;
      }
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    text-align: center;

    .info {
      content: "112 Glenwood Ave Hyde Park, Boston, MA";
    }
  }
`;

export { Container, Content };
