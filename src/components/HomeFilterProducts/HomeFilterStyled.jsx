import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const HomeFilterProductsContainer = styled.div`
  margin-top: 40px;
`;
const HomeFilterProductsWrapper = styled.div`
  max-width: 1043px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;
const FilterToggle = styled.button`
  display: flex;
  border: none;
  outline: none;
  background: none;
  align-items: center;
  cursor: pointer;
  transition: 250ms linear;
  &:hover {
    color: #c96;
  }
`;

const FilterCategoryContent = styled.div``;
const FilterCategoryContentWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  transition: 250ms linear;
  &.open {
    height: 220px;
    visibility: visible;
  }
`;

const HamburgerBtnIcon = styled(RxHamburgerMenu)`
  font-size: 20px;
  &.close {
    display: none;
  }
`;
const HamburgerCloseBtnIcon = styled(IoCloseOutline)`
  font-size: 20px;
  display: none;
  &.open {
    display: block;
  }
`;

const CategorySectionOne = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  border-top: 1px solid #ebebeb;
`;
const CategorySectionItem = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin:5px 0;
  align-items: center;
`;
const CategorySectionCheck = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;
const PriceTitle = styled.p`
 padding: 10px 0 20px 0;
`;
const PriceRange = styled.p``;

const CategoryProductCount = styled.div`
  border-radius: 0.6rem;
  color: #777;
  background-color: #f8f8f8;
  padding: 3px 8px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  HomeFilterProductsContainer,
  HomeFilterProductsWrapper,
  HamburgerBtnIcon,
  FilterToggle,
  CategoryProductCount,
  HamburgerCloseBtnIcon,
  FilterCategoryContent,
  FilterCategoryContentWrapper,
  CategorySectionOne,
  CategorySectionItem,
  CategorySectionCheck,
  PriceTitle,
  PriceRange,
};
