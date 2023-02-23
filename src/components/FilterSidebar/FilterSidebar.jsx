import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {
  CategoryTitle,
  CategoryTitleIcon,
  FilterCategory,
  FilterItem,
  FilterCategoryWrapper,
  FilterClearBtn,
  FilterSidebarContainer,
  FilterSidebarWrapper,
  FilterTitle,
  FilterWidgetClean,
  FilterItemCheckBox,
  FilterItemLabel,
  FilterItemCount,
  FilterPriceText,
  FilterPriceRange,
  FilterPriceMinValue,
  FilterPriceMaxValue,
  FilterCategoryWrapperCopy
} from "./FilterSidebarStyled";

const FilterSidebar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [minVal, setMinVal] = useState(0)
  const [maxVal, setMaxVal] = useState(700)

  const toggleCategory = () => {
    setOpen(!open);
  };

  const togglePrice = () => {
    setShow(!show);
  };
  return (
    <FilterSidebarContainer>
      <FilterSidebarWrapper>
        <FilterWidgetClean>
          <FilterTitle>Filters:</FilterTitle>
          <FilterClearBtn>Clean All</FilterClearBtn>
        </FilterWidgetClean>
        <FilterCategory>
          <CategoryTitle>
            <h3>Category</h3>
            <CategoryTitleIcon
              className={open && "open"}
              onClick={toggleCategory}
            />
          </CategoryTitle>

          <FilterCategoryWrapper className={open && "open"}>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="dresses" />
                <FilterItemLabel htmlFor="dresses">Dresses</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="t-shirts" />
                <FilterItemLabel htmlFor="t-shirts">T-shirts</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="bags" />
                <FilterItemLabel htmlFor="bags">Bags</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="jackets" />
                <FilterItemLabel htmlFor="jackets">Jackets</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="shoes" />
                <FilterItemLabel htmlFor="shoes">Shoes</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
            <FilterItem>
              <div>
                <FilterItemCheckBox id="jeans" />
                <FilterItemLabel htmlFor="jeans">Jeans</FilterItemLabel>
              </div>
              <FilterItemCount>3</FilterItemCount>
            </FilterItem>
          </FilterCategoryWrapper>
        </FilterCategory>

        <FilterCategory>
          <CategoryTitle>
            <h3>Price</h3>
            <CategoryTitleIcon
              className={show && "show"}
              onClick={togglePrice}
            />
          </CategoryTitle>

          <FilterCategoryWrapperCopy className={show && "show"}>
            <FilterPriceText>
              <span>Price Range: </span>
              <FilterPriceRange>
                <FilterPriceMinValue><span>$</span>{minVal}</FilterPriceMinValue>
                <span>-</span>
                <FilterPriceMaxValue><span>$</span>{maxVal}</FilterPriceMaxValue>
              </FilterPriceRange>
            </FilterPriceText>
            <div style={{ padding: "10px 0" }}>
              <RangeSlider min={0} defaultValue={[minVal, maxVal]} onInput={(values)=> {
                setMinVal(values[0])
                setMaxVal(values[1])
              }} max={1000} />
            </div>
          </FilterCategoryWrapperCopy>
        </FilterCategory>
      </FilterSidebarWrapper>
    </FilterSidebarContainer>
  );
};

export default FilterSidebar;
