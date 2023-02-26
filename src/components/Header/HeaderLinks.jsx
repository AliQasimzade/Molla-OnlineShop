import React, { useState } from "react";
import {
  BasketContainer,
  BasketCount,
  BasketIcon,
  HeaderLeft,
  UserContainer,
  UserIcon,
  UserName,
  WishListContainer,
  WishListCount,
  WishListIcon,
  UserLogout,
} from "./HeaderStyled";
import { useSelector, useDispatch } from "react-redux";
import { logoutedUser } from "../../redux/slices/userSlice";

const HeaderLinks = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const basketCount = useSelector(
    (state) => state.persistedReducer.basket.basket.length
  );
  const wishlistCount = useSelector(
    (state) => state.persistedReducer.wishlist.wishlist.length
  );

  const userName = useSelector(
    (state) => state.persistedReducer.user.user
  );

  const logoutUser = () => {
    dispatch(logoutedUser());
  };
  return (
    <HeaderLeft>
      <WishListContainer to="/wishlist">
        <WishListIcon />
        <WishListCount>{wishlistCount}</WishListCount>
      </WishListContainer>
      <BasketContainer to="/cart">
        <BasketIcon />
        <BasketCount>{basketCount}</BasketCount>
      </BasketContainer>
      {!userName.userName && (
        <UserContainer to="/login">
          <UserIcon />
        </UserContainer>
      )}
      {userName?.userName && (
        <div className="profile" style={{ position: "relative" }}>
          <UserName onClick={() => setShow(!show)}>{userName.userName}</UserName>
          {show && <UserLogout onClick={logoutUser}>Logout</UserLogout>}
        </div>
      )}
    </HeaderLeft>
  );
};

export default HeaderLinks;
