import styled from "styled-components";

const SortCategoryContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 677px) {
    justify-content: center;
  }
`;
const SortCategoryTitle = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: #333333;
  margin-right: 16px;
`;
const SortCategorySection = styled.select`
  color: #999999;
  font-weight: 300;
  font-size: 1.2rem;
  padding: 4.5px 20px 4.5px 10px;
  height: 30px;
  outline: 0;
  border-color: #d7d7d7;
  margin-bottom: 0;
  font-size: 15px;
`;
const SortCategoryOption = styled.option``;
export {
  SortCategoryContainer,
  SortCategorySection,
  SortCategoryOption,
  SortCategoryTitle,
};
