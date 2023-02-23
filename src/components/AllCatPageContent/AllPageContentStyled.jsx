import styled from "styled-components";

const PageContent = styled.div`
  width: 100%;
`;

const PageContentWrapper = styled.div`
  width: 1188px;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
  display: flex;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;
const PageRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 25%);
  padding-top: 25px;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const PageRightContentWrapper = styled.div``

export { PageContent, PageContentWrapper, PageRightContent,PageRightContentWrapper };
