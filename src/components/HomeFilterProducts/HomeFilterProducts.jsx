import React from "react";
import {
  HomeFilterProductsContainer,
  HomeFilterProductsWrapper,
  FilterToggle,
} from "./HomeFilterStyled";

const HomeFilterProducts = () => {
  return (
    <HomeFilterProductsContainer>
      <HomeFilterProductsWrapper>
        <FilterToggle>
          <label htmlFor="check">
            <input type="checkbox" id="check" />
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </label>
         <span style={{marginLeft:'45px'}}>Filter</span>
        </FilterToggle>    
      </HomeFilterProductsWrapper>
    </HomeFilterProductsContainer>
  );
};

export default HomeFilterProducts;
