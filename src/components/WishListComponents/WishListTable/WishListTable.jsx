import React from "react";
import {
  WishListTableBody,
  WishListTableBodyDataContent,
  WishListTableBodyDataContentImage,
  WishListTableBodyDataContentImageContainer,
  WishListTableBodyDataContentPrice,
  WishListTableBodyDataContentTitle,
  WishListTableContainer,
  WishListTableContent,
  WishListTableData,
  WishListTableHead,
  WishListTableHeadData,
  WishListTableRow,
  WishListTableBodyDataContentAddToCart,
  WishListTableBodyDataContentAddToCartIcon,
  WishListTableBodyDataContentRemove,
  WishListTableBodyDataContentRemoveIcon
} from "./WishListTableStyled";

const WishListTable = () => {
  return (
    <WishListTableContainer>
      <WishListTableContent>
        <WishListTableHead>
          <WishListTableRow>
            <WishListTableHeadData>Product</WishListTableHeadData>
            <WishListTableHeadData>Price</WishListTableHeadData>
            <WishListTableHeadData>Stock Status</WishListTableHeadData>
            <WishListTableHeadData></WishListTableHeadData>
            <WishListTableHeadData></WishListTableHeadData>
          </WishListTableRow>
        </WishListTableHead>
        <WishListTableBody>
          <WishListTableRow>
            <WishListTableData>
              <WishListTableBodyDataContent>
                <WishListTableBodyDataContentImageContainer>
                  <WishListTableBodyDataContentImage src="http://127.0.0.1:5500/portotheme.com/html/molla/assets/images/products/table/product-1.jpg" />
                </WishListTableBodyDataContentImageContainer>
                <WishListTableBodyDataContentTitle>
                  Beige knitted elastic runner shoes
                </WishListTableBodyDataContentTitle>
              </WishListTableBodyDataContent>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentPrice>
                    $ 84.00
                </WishListTableBodyDataContentPrice>
            </WishListTableData>
            <WishListTableData> In stock</WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentAddToCart>
                <WishListTableBodyDataContentAddToCartIcon />
                    <span>Add to cart</span>
                </WishListTableBodyDataContentAddToCart>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentRemove>
                    <WishListTableBodyDataContentRemoveIcon />
                </WishListTableBodyDataContentRemove>
            </WishListTableData>
          </WishListTableRow>
          <WishListTableRow>
          <WishListTableData>
              <WishListTableBodyDataContent>
                <WishListTableBodyDataContentImageContainer>
                  <WishListTableBodyDataContentImage src="http://127.0.0.1:5500/portotheme.com/html/molla/assets/images/products/table/product-1.jpg" />
                </WishListTableBodyDataContentImageContainer>
                <WishListTableBodyDataContentTitle>
                  Beige knitted elastic runner shoes
                </WishListTableBodyDataContentTitle>
              </WishListTableBodyDataContent>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentPrice>
                    $ 84.00
                </WishListTableBodyDataContentPrice>
            </WishListTableData>
            <WishListTableData> In stock</WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentAddToCart>
                    <WishListTableBodyDataContentAddToCartIcon />
                    <span>Add to cart</span>
                </WishListTableBodyDataContentAddToCart>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentRemove>
                    <WishListTableBodyDataContentRemoveIcon />
                </WishListTableBodyDataContentRemove>
            </WishListTableData>
          </WishListTableRow>
          <WishListTableRow>
          <WishListTableData>
              <WishListTableBodyDataContent>
                <WishListTableBodyDataContentImageContainer>
                  <WishListTableBodyDataContentImage src="http://127.0.0.1:5500/portotheme.com/html/molla/assets/images/products/table/product-1.jpg" />
                </WishListTableBodyDataContentImageContainer>
                <WishListTableBodyDataContentTitle>
                  Beige knitted elastic runner shoes
                </WishListTableBodyDataContentTitle>
              </WishListTableBodyDataContent>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentPrice>
                    $ 84.00
                </WishListTableBodyDataContentPrice>
            </WishListTableData>
            <WishListTableData> In stock</WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentAddToCart>
                <WishListTableBodyDataContentAddToCartIcon />
                    <span>Add to cart</span>
                </WishListTableBodyDataContentAddToCart>
            </WishListTableData>
            <WishListTableData>
                <WishListTableBodyDataContentRemove>
                    <WishListTableBodyDataContentRemoveIcon />
                </WishListTableBodyDataContentRemove>
            </WishListTableData>
          </WishListTableRow>
        </WishListTableBody>
      </WishListTableContent>
    </WishListTableContainer>
  );
};

export default WishListTable;
