import styled from "styled-components";
import bgImage from "../../../assets/images/page-header-bg.jpg"
const WishListBannerContainer = styled.div`
 width: 100%;
  background-image: url(${bgImage});
  background-color: #ebebeb;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 46px 0 50px 0;`

const WishListBannerContainerWrapper = styled.div`
   width: 1188px;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  margin: 0 auto;
`
const WishListTitle = styled.h1`
 font-size: 40px;
`;

export {
    WishListBannerContainer,
    WishListBannerContainerWrapper,
    WishListTitle,
}