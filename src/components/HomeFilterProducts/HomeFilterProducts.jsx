import React, { useState } from "react";
import {
  HomeFilterProductsContainer,
  HomeFilterProductsWrapper,
  FilterToggle,
  HamburgerBtnIcon,
  HamburgerCloseBtnIcon,
  FilterCategoryContent,
  FilterCategoryContentWrapper,
  CategorySectionOne,
  CategorySectionItem,
  CategorySectionCheck,
  CategoryProductCount,
  PriceTitle,
  PriceRange,
} from "./HomeFilterStyled";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const HomeFilterProducts = () => {
  const [close, setClose] = useState(false);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(700);
  return (
    <HomeFilterProductsContainer>
      <HomeFilterProductsWrapper>
        <FilterToggle onClick={() => setClose(!close)}>
          <HamburgerBtnIcon className={close && "close"} />
          <HamburgerCloseBtnIcon className={close && "open"} />
          <span style={{ marginLeft: "10px" }}>Filter</span>
        </FilterToggle>

        <FilterCategoryContent>
          <FilterCategoryContentWrapper className={close && "open"}>
            <CategorySectionOne>
              <p style={{padding:'10px 0 20px 0'}}>Category:</p>
              <CategorySectionItem>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                >
                  <CategorySectionCheck />
                  <p>Check</p>
                </button>
                <CategoryProductCount>3</CategoryProductCount>
              </CategorySectionItem>
              <CategorySectionItem>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                >
                  <CategorySectionCheck />
                  <p>Check</p>
                </button>
                <CategoryProductCount>3</CategoryProductCount>
              </CategorySectionItem>
              <CategorySectionItem>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                >
                  <CategorySectionCheck />
                  <p>Check</p>
                </button>
                <CategoryProductCount>3</CategoryProductCount>
              </CategorySectionItem>
              <CategorySectionItem>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    border: "none",
                    outline: "none",
                    background: "none",
                  }}
                >
                  <CategorySectionCheck />
                  <p>Check</p>
                </button>
                <CategoryProductCount>3</CategoryProductCount>
              </CategorySectionItem>
            </CategorySectionOne>
            <CategorySectionOne>
              <PriceTitle>Price: </PriceTitle>
              <PriceRange>
                Price Range:
                <span style={{ color: "#c96" }}>${minVal}</span>
                <span style={{ color: "#c96" }}>-</span>
                <span style={{ color: "#c96" }}>${maxVal}</span>
              </PriceRange>
              <div style={{ padding: "10px 0" }}>
                <RangeSlider
                  min={0}
                  defaultValue={[minVal, maxVal]}
                  onInput={(values) => {
                    setMinVal(values[0]);
                    setMaxVal(values[1]);
                  }}
                  max={1000}
                />
              </div>
            </CategorySectionOne>
          </FilterCategoryContentWrapper>
        </FilterCategoryContent>
      </HomeFilterProductsWrapper>
    </HomeFilterProductsContainer>
  );
};

export default HomeFilterProducts;
