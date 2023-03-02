import React, { useState, useEffect } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutedUser } from "../../../../redux/slices/userSlice";
export default function Home() {
  const currentUser = useSelector((state) => state.persistedReducer.user.user);
  const products = useSelector(
    (state) => state.persistedReducer.products.products
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser.name) {
      navigate("/user/login");
    }
  }, []);

  const ProductsDetail = products?.map((val, ind) => {
    return (
      <div key={ind} className="product">
        <strong>Title:</strong>
        {val.title}
        <strong>Description:</strong>
        {val.description}
        <stron>Price:</stron>
        {val.price}
        <strong>Image:</strong>
        <img src={val.image} style={{ width: "60px", height: "60px" }} />
        <Link to={`/user/product/${val._id}`}>Detail</Link>
      </div>
    );
  });
  const Logout = () => {
    dispatch(logoutedUser());
    navigate("/user/login")
  };
  return (
    <div className="home">
      {currentUser.name ? (
        <button onClick={Logout}>Logout</button>
      ) : (
        <div>
          <Link to="/login">Sign In</Link>
          <br />
          <Link to="/signup">SignUp</Link>
        </div>
      )}
      {currentUser?.name}
      <h1>Home Page</h1>

      <div className="products">{ProductsDetail}</div>
    </div>
  );
}
