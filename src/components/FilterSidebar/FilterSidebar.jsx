import React, { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {
  CategoryTitle,
  CategoryTitleIcon,
  FilterCategory,
  FilterItem,
  FilterCategoryWrapper,
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
  const products = useSelector((state) => state.products.products);
  const cat = [...new Set(products.map((product) => product.category))];
  const [copyProducts, setCopyProducts] = useState(
    products.length > 0 ? [...products] : []
  );

  const min = copyProducts.sort((a, b) => a.price - b.price)[0];
  const max = copyProducts.sort((a, b) => b.price - a.price)[0];
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [minVal, setMinVal] = useState(min?.price);
  const [maxVal, setMaxVal] = useState(max?.price);

  const toggleCategory = () => {
    setOpen(!open);
  };

  const togglePrice = () => {
    setShow(!show);
  };
  const checkboxes = document.querySelectorAll(".checkbox");

  function onlyOneChecked() {
    checkboxes.forEach((checkbox) => {
      if (checkbox !== this) {
        checkbox.checked = false;
      }
    });
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", onlyOneChecked);
  });
  const filterCat = (cat, e) => {
    if (e.target.checked) {
      setItems(products.filter((product) => product.category === cat));
    } else {
      setItems(products.map((product) => product));
    }
  };

  return (
    <FilterSidebarContainer>
      <FilterSidebarWrapper>
        <FilterWidgetClean>
          <FilterTitle>Filters</FilterTitle>
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
            {cat.map((ca) => (
              <FilterItem key={ca._id}>
                <div>
                  <FilterItemCheckBox
                    id={ca}
                    name="group"
                    className="checkbox"
                    onClick={(event) => filterCat(ca, event)}
                  />
                  <FilterItemLabel htmlFor={ca}>{ca}</FilterItemLabel>
                </div>
                <FilterItemCount>
                  {copyProducts.filter((pro) => pro.category === ca).length}
                </FilterItemCount>
              </FilterItem>
            ))}
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
                min={min?.price}
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
                max={max?.price}
              />
            </div>
          </FilterCategoryWrapperCopy>
        </FilterCategory>
      </FilterSidebarWrapper>
    </FilterSidebarContainer>
  );
};

export default FilterSidebar;
