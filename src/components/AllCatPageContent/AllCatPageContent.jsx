import React, {useState} from "react";
import { PageContent, PageContentWrapper,PageRightContent, PageRightContentWrapper } from "./AllPageContentStyled";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import AllCatProducts from "./AllCatProducts/AllCatProducts";
import SortCategory from "./SortCategory/SortCategory";
import { useSelector } from "react-redux";
const AllCatPageContent = () => {
  const products = useSelector(state => state.persistedReducer.products.products);
  
  const [items, setItems] = useState(products)
  return (
    <PageContent>
      <PageContentWrapper>
        <FilterSidebar setItems={setItems}/>
       <PageRightContent>
        <PageRightContentWrapper>
        <SortCategory  setItems={setItems}/>
       <AllCatProducts items={items} setItems={setItems}/>
        </PageRightContentWrapper>   
       </PageRightContent>
      </PageContentWrapper>
    </PageContent>
  );
};

export default AllCatPageContent;
