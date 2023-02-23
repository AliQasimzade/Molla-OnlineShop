import React from "react";
import {
  SortCategoryContainer,
  SortCategoryOption,
  SortCategorySection,
  SortCategoryTitle,
} from "./SortCategoryStyled";

const SortCategory = () => {
  return (
    <SortCategoryContainer>
      <SortCategoryTitle>Sort by:</SortCategoryTitle>
      <SortCategorySection name="sortby">
        <SortCategoryOption value="popularity">Most Popular</SortCategoryOption>
        <SortCategoryOption value="rating">Most Rated</SortCategoryOption>
        <SortCategoryOption value="date">Date</SortCategoryOption>
      </SortCategorySection>
    </SortCategoryContainer>
  );
};

export default SortCategory;
