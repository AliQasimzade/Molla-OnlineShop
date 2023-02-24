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
  WishListTableBodyDataContentRemoveIcon,
} from "./WishListTableStyled";
import { useSelector, useDispatch } from "react-redux";
import { removeWishItem } from "../../../redux/slices/wishListSlice";
import { addBasket } from "../../../redux/slices/basketSlice";

const WishListTable = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist
  );
  const basket = useSelector((state) => state.persistedReducer.basket.basket);

  const removeWish = (wi) => {
    dispatch(removeWishItem(wi));
  };

  const addToBasket = (pro) => {
    dispatch(addBasket(pro));
  };
  return (
    <WishListTableContainer>
      {wishlist.length > 0 ? <WishListTableContent>
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
          { wishlist.map((wish) => (
              <WishListTableRow key={wish._id}>
                <WishListTableData>
                  <WishListTableBodyDataContent>
                    <WishListTableBodyDataContentImageContainer>
                      <WishListTableBodyDataContentImage src={wish.image} />
                    </WishListTableBodyDataContentImageContainer>
                    <WishListTableBodyDataContentTitle>
                      {wish.title}
                    </WishListTableBodyDataContentTitle>
                  </WishListTableBodyDataContent>
                </WishListTableData>
                <WishListTableData>
                  <WishListTableBodyDataContentPrice>
                    $ {wish.price}
                  </WishListTableBodyDataContentPrice>
                </WishListTableData>
                <WishListTableData> In stock</WishListTableData>
                <WishListTableData>
                  <WishListTableBodyDataContentAddToCart
                    onClick={() => addToBasket(wish)}
                    disabled={basket.find(bas => bas._id === wish._id) ? true: false}
                  >
                    <WishListTableBodyDataContentAddToCartIcon />
                    <span>
                      {basket.find((bas) => bas._id === wish._id)
                        ? "added to cart"
                        : "add to cart"}
                    </span>
                  </WishListTableBodyDataContentAddToCart>
                </WishListTableData>
                <WishListTableData>
                  <WishListTableBodyDataContentRemove
                    onClick={() => removeWish(wish)}
                  >
                    <WishListTableBodyDataContentRemoveIcon />
                  </WishListTableBodyDataContentRemove>
                </WishListTableData>
              </WishListTableRow>
            ))}
        </WishListTableBody>
      </WishListTableContent> : <h1>No product in wishlist</h1>}
    </WishListTableContainer>
  );
};

export default WishListTable;
