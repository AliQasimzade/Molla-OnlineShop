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
import { useSelector } from "react-redux";

const HomeFilterProducts = ({ setItems }) => {
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const copyProducts = products.length > 0 ? [...products] : []

  const min = copyProducts.sort((a, b) => a.price - b.price)[0];
  const max = copyProducts.sort((a, b) => b.price - a.price)[0];
  const [close, setClose] = useState(false);
  const [minVal, setMinVal] = useState(min?.price);
  const [maxVal, setMaxVal] = useState(max?.price);
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
              <p style={{ padding: "10px 0 20px 0" }}>Category:</p>
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
            </CategorySectionOne>
          </FilterCategoryContentWrapper>
        </FilterCategoryContent>
      </HomeFilterProductsWrapper>
    </HomeFilterProductsContainer>
  );
};

export default HomeFilterProducts;
