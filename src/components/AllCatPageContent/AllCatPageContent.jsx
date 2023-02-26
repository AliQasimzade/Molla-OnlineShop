import React, { useState, useEffect } from "react";
import {
  PageContent,
  PageContentWrapper,
  PageRightContent,
  PageRightContentWrapper,
} from "./AllPageContentStyled";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import AllCatProducts from "./AllCatProducts/AllCatProducts";
import SortCategory from "./SortCategory/SortCategory";
import { useSelector } from "react-redux";
const AllCatPageContent = () => {
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (products) {
      setItems([...products]);
    }
  }, [products]);
  return (
    <PageContent>
      <PageContentWrapper>
        {items.length > 0 && <FilterSidebar setItems={setItems} />}
        <PageRightContent>
          <PageRightContentWrapper>
            {items.length > 0 && <SortCategory setItems={setItems} />}
            {items.length > 0 && (
              <AllCatProducts items={items} setItems={setItems} />
            )}
          </PageRightContentWrapper>
        </PageRightContent>
      </PageContentWrapper>
    </PageContent>
  );
};

export default AllCatPageContent;
