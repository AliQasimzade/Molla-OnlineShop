import React, { useState, useEffect } from "react";
import axios from "axios";
import Leftside from "../../Components/LeftSide/Leftside";
import "./orders.css";
import AdminLogin from "../AdminLogin/AdminLogin";
export default function Orders({ currentAdmin, setCurrentAdmin }) {
  const [orders, setorders] = useState([]);
const baseUrl = import.meta.env.VITE_BASE_URL
  useEffect(() => {
    axios.get(`${baseUrl}/orders`).then((dt) => {
      setorders(dt.data);
    });
  }, []);

  const deleteOrder = (id) => {
    axios.get(`${baseUrl}/deleteorder/${id}`);
    const returned = orders.filter((o) => o._id !== id);
    setorders(returned);
  };
  const sendOrder = async (id) => {
    axios
      .put(`${baseUrl}/sendorder/${id}`)
      .then((dt) => console.log(dt.data));
    const returned = orders?.map((obj) => {
      return obj._id === id
        ? {
            ...obj,
            isSend: true,
          }
        : obj;
    });
    setorders(returned);
  };
  const OrderData = orders?.map((obj, ind) => {
    return (
      <tr key={ind}>
        <th scope="row">{ind + 1}</th>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
        <td>
          {obj?.products?.map((product) => (
            <span key={product._id}>
              {product.title}: {product.price}AZN Sayi: {product.count}{" "}
            </span>
          ))}
          <span>
            Toplam:{" "}
            {obj?.products?.reduce((acc, val) => acc + val.price * val.count, 0)}
            AZN
          </span>
        </td>
        <td>{obj.isSend ? "sended" : "not send"}</td>
        <td>
          <button onClick={() => deleteOrder(obj._id)}>Delete</button>
          <button onClick={() => sendOrder(obj._id)}>Send</button>
        </td>
      </tr>
    );
  });

  return (
    <div className="orders">
      {JSON.parse(sessionStorage.getItem("currentAdmin")) ? (
        <>
          <Leftside
            currentAdmin={currentAdmin}
            setCurrentAdmin={setCurrentAdmin}
          />
          <div className="orders-right">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Products</th>
                  <th scope="col">isSend</th>
                </tr>
              </thead>
              <tbody>{OrderData}</tbody>
            </table>
          </div>
        </>
      ) : (
        <AdminLogin />
      )}
    </div>
  );
}
