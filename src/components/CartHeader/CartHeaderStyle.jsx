import styled from "styled-components";
import bgImage from "../../assets/images/page-header-bg.jpg"

const Header = styled.div`
padding: 4.6rem 0 5rem;
background: url(${bgImage});
background-size: cover;
background-position: center center;
`;
const Page_title = styled.div`
  font-size: 3rem;
  color: #333333;
  font-weight: 600;
  text-align: center;
`;

export {
    Header,
    Page_title
}