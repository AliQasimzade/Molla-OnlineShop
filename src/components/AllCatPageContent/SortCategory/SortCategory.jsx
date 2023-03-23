import React, {useState} from "react";
import {
  SortCategoryContainer,
  SortCategoryOption,
  SortCategorySection,
  SortCategoryTitle,
} from "./SortCategoryStyled";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../redux/slices/productsSlice";

const SortCategory = ({setItems}) => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state) => state.products.products
  );
  const copyProducts = [...products];
  const [select, setSelect] = useState("default")
  const sortProducts = (e) => {
    if (e.target.value === "popularity") {
      const sortResult = copyProducts.sort((a, b) => a.price - b.price);
      dispatch(getProducts(sortResult));
      setItems(sortResult)
    } else if (e.target.value === "rating") {
      const sortResult = copyProducts.sort((a, b) => b.price - a.price);
      dispatch(getProducts(sortResult));
      setItems(sortResult);
    }
  };
  return (
    <SortCategoryContainer>
      <SortCategoryTitle>Sort by:</SortCategoryTitle>
      <SortCategorySection defaultValue={select} onChange={(e) => sortProducts(e)}>
        <SortCategoryOption  value="default">
          Filter
        </SortCategoryOption>
        <SortCategoryOption value="popularity">
          Ucuzdan Bahaya
        </SortCategoryOption>
        <SortCategoryOption value="rating">Bahadan ucuza</SortCategoryOption>
      </SortCategorySection>
    </SortCategoryContainer>
  );
};

export default SortCategory;
