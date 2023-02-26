import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admins.css";
import Leftside from "../../Components/LeftSide/Leftside";
import AdminLogin from "../AdminLogin/AdminLogin";
export default function Admins() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const [Admins, setAdmins] = useState([]);
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("currentAdmin"))
      ? JSON.parse(sessionStorage.getItem("currentAdmin"))
      : null
  );

  useEffect(() => {
    axios
      .get(`${baseUrl}/admins`)
      .then((dt) => (currentAdmin ? setAdmins(dt.data) : setAdmins([])));

  }, [currentAdmin]);
  const deleteAdmin = (id) => {
    axios.get(`${baseUrl}/delete/${id}`);
    const returned = Admins.filter((obj) => obj._id !== id);
    setAdmins(returned);
  };
  const AdminData = Admins?.map((obj, ind) => {
    return (
      <tr key={ind}>
        <th scope="row">{ind + 1}</th>
        <td>{obj.name}</td>
        <td>{obj.email}</td>
        <td>{obj.password}</td>
        <td>
          <button onClick={() => deleteAdmin(obj._id)}>Delete</button>
        </td>
      </tr>
    );
  });

  const [newAdmin, setnewAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  const getNewAdmin = (e) => {
    const { name, value } = e.target;
    setnewAdmin((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  // registeradmin
  const AddAdmin = async () => {
    axios.post(`${baseUrl}/registeradmin`, newAdmin);
    setAdmins([...Admins, newAdmin]);
  };
  const addNewAdmin = (e) => {
    e.preventDefault();
    AddAdmin();

  };
  return (
    <div className="admins">
      {currentAdmin ? (
        <>
          <Leftside
            currentAdmin={currentAdmin}
            setCurrentAdmin={setCurrentAdmin}
          />
          <div className="admins-right">
            <div className="add-admin">
              <form onSubmit={addNewAdmin} className="ad-admin-form">
                <input
                  onChange={getNewAdmin}
                  name="name"
                  type="text"
                  placeholder="name..."
                  value={newAdmin.name}
                />
                <input
                  onChange={getNewAdmin}
                  name="email"
                  type="email"
                  placeholder="email..."
                  value={newAdmin.email}
                />
                <input
                  onChange={getNewAdmin}
                  name="password"
                  type="password"
                  placeholder="password..."
                  value={newAdmin.password}
                />
                <input type="submit" value="add" />
              </form>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>{AdminData}</tbody>
            </table>
          </div>
        </>
      ) : (
        <AdminLogin setCurrentAdmin={setCurrentAdmin} />
      )}
    </div>
  );
}
