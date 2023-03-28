import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";

const FilterSidebarContainer = styled.aside`
  width: 25%;
  padding: 40px 0 0 0;
  margin-right: 25px;
  @media screen and (max-width: 992px) {
    width: 100%;
    margin-right: 0;
  }
`;

const FilterWidgetClean = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-top: -2px;
  border-bottom: 1px solid #ebebeb;
`;

const FilterTitle = styled.label`
  color: #333333;
  font-size: 14px;
`;

const FilterCategory = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;
  &:last-child{
    border-bottom: none;
  }
`;
const FilterCategoryWrapper = styled.div`
  padding-top: 16px;
  transition: 350ms linear;
  overflow: hidden;
 height: 350px;
  opacity: 1;
  &.open {
    height: 0;
    opacity: 0;
  }
  &.show {
    height: 0;
    opacity: 0;
  }
`;
const FilterCategoryWrapperCopy = styled(FilterCategoryWrapper)`
  height: 120px;
`
const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 0 0;
  color: #333333;
`;
const FilterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;


const FilterSidebarWrapper = styled.div`
  width: 100%;
`;

const FilterItemCheckBox = styled.input.attrs({ type: "checkbox" })`
   cursor: pointer;
`;
const FilterItemLabel = styled.label`
  padding-left: 10px;
   cursor: pointer;

`;
const FilterItemCount = styled.div`
  border-radius: 0.6rem;
  color: #777;
  background-color: #f8f8f8;
  padding: 3px 8px;
`;

const CategoryTitleIcon = styled(BsChevronDown)`
  cursor: pointer;
  transition: 250ms linear;
  &.open {
    transform: rotate(180deg);
  }
  &.show {
    transform: rotate(180deg);
  }
`;

const FilterPriceText = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  margin-bottom: 20px;
`;
const FilterPriceMinValue = styled.span`
  margin-right: 5px;
`;
const FilterPriceMaxValue = styled.span`
  margin-left: 5px;
`;
const FilterPriceRange = styled.div`
  color: #c96;
`;
export {
  FilterSidebarContainer,
  CategoryTitleIcon,
  FilterPriceMinValue,
  FilterPriceMaxValue,
  FilterWidgetClean,
  FilterSidebarWrapper,
  FilterTitle,
  FilterPriceText,
  FilterPriceRange,
  FilterItemCount,
  CategoryTitle,
  FilterCategory,
  FilterCategoryWrapper,
  FilterItem,
  FilterItemCheckBox,
  FilterItemLabel,
  FilterCategoryWrapperCopy
};
