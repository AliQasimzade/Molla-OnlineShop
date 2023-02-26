import styled from "styled-components";
import bgImage from "../../assets/images/page-header-bg.jpg"

const AllCatBannerContainer = styled.div`
  width: 100%;
  background-image: url(${bgImage});
  background-color: #ebebeb;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 46px 0 50px 0;
`;
const ContainerBanner = styled.div`
  width: 1188px;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  margin: 0 auto;
`;

const ContainerBannerTitle = styled.h1`
  font-size: 40px;
`;

export { AllCatBannerContainer, ContainerBanner, ContainerBannerTitle };
