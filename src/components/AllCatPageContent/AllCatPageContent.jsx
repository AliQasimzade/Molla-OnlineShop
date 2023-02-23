import React from "react";
import { PageContent, PageContentWrapper,PageRightContent, PageRightContentWrapper } from "./AllPageContentStyled";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import AllCatProducts from "./AllCatProducts/AllCatProducts";
import SortCategory from "./SortCategory/SortCategory";

const AllCatPageContent = () => {
  return (
    <PageContent>
      <PageContentWrapper>
        <FilterSidebar />
       <PageRightContent>
        <PageRightContentWrapper>
        <SortCategory />
       <AllCatProducts />
        </PageRightContentWrapper>   
       </PageRightContent>
      </PageContentWrapper>
    </PageContent>
  );
};

export default AllCatPageContent;
