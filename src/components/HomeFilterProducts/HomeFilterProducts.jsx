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
import { useEffect } from "react";

const HomeFilterProducts = ({ setItems }) => {
  const [copyProducts, setCopyProducts] = useState([]);
  const products = useSelector((state) => state.products.products);
  const cat = [...new Set(products.map((product) => product.category))];
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(0);
  useEffect(() => {
    if (products) {
      setCopyProducts([...products]);
      setMin([...products].sort((a, b) => a.price - b.price)[0]);
      setMax([...products].sort((a, b) => b.price - a.price)[0]);
      setMinVal([...products].sort((a, b) => a.price - b.price)[0]?.price);
      setMaxVal([...products].sort((a, b) => b.price - a.price)[0]?.price);
    }
  }, [products]);

  const [close, setClose] = useState(false);

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
              {cat.map((ca) => (
                <CategorySectionItem key={ca}>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      outline: "none",
                      background: "none",
                    }}
                  >
                    <CategorySectionCheck
                      id={ca}
                      className="checkbox"
                      onClick={(event) => filterCat(ca, event)}
                    />
                    <label htmlFor={ca}>{ca}</label>
                  </button>
                  <CategoryProductCount>
                    {copyProducts.filter((pro) => pro.category === ca).length}
                  </CategoryProductCount>
                </CategorySectionItem>
              ))}
            </CategorySectionOne>
            <CategorySectionOne>
              <PriceTitle>Price: </PriceTitle>
              <PriceRange>
                Price Range:
                <span style={{ color: "#c96" }}>${minVal}</span>
                <span style={{ color: "#c96" }}>-</span>
                <span style={{ color: "#c96" }}>${maxVal && maxVal}</span>
              </PriceRange>
              <div style={{ padding: "10px 0" }}>
                {copyProducts.length > 0 && (
                  <RangeSlider
                    min={min?.price}
                    defaultValue={[minVal, maxVal]}
                    onInput={(values) => {
                      setMinVal(values[0]);
                      setMaxVal(values[1]);
                      const filterProducts = copyProducts.filter((product) => {
                        if (
                          minVal <= product.price &&
                          product.price <= maxVal
                        ) {
                          return product;
                        }
                      });
                      setItems(filterProducts);
                    }}
                    max={max?.price}
                  />
                )}
              </div>
            </CategorySectionOne>
          </FilterCategoryContentWrapper>
        </FilterCategoryContent>
      </HomeFilterProductsWrapper>
    </HomeFilterProductsContainer>
  );
};

export default HomeFilterProducts;
