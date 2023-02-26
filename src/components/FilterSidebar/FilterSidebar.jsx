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
  FilterCategoryWrapperCopy,
} from "./FilterSidebarStyled";

import { useSelector } from "react-redux";
const FilterSidebar = ({ setItems }) => {
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const copyProducts = products.length > 0 ? [...products] : [];

  const min = copyProducts.sort((a, b) => a.price - b.price)[0];
  const max = copyProducts.sort((a, b) => b.price - a.price)[0];
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [minVal, setMinVal] = useState(min?.price - 1);
  const [maxVal, setMaxVal] = useState(max?.price + 1);

  const toggleCategory = () => {
    setOpen(!open);
  };

  const togglePrice = () => {
    setShow(!show);
  };

  const resetFilter = () => {
    location.reload();
  };
  return (
    <FilterSidebarContainer>
      <FilterSidebarWrapper>
        <FilterWidgetClean>
          <FilterTitle>Filters:</FilterTitle>
          <FilterClearBtn onClick={resetFilter}>Clean All</FilterClearBtn>
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
                <FilterPriceMinValue>
                  <span>$</span>
                  {minVal}
                </FilterPriceMinValue>
                <span>-</span>
                <FilterPriceMaxValue>
                  <span>$</span>
                  {maxVal}
                </FilterPriceMaxValue>
              </FilterPriceRange>
            </FilterPriceText>
            <div style={{ padding: "10px 0" }}>
              <RangeSlider
                min={min?.price - 3}
                defaultValue={[minVal, maxVal]}
                onInput={(values) => {
                  setMinVal(values[0]);
                  setMaxVal(values[1]);
                  const filterProducts = copyProducts.filter((product) => {
                    if (minVal <= product.price && product.price <= maxVal) {
                      return product;
                    }
                  });

                  setItems(filterProducts);
                }}
                max={max?.price + 90}
              />
            </div>
          </FilterCategoryWrapperCopy>
        </FilterCategory>
      </FilterSidebarWrapper>
    </FilterSidebarContainer>
  );
};

export default FilterSidebar;
