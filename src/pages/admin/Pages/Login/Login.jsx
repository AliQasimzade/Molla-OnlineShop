import React from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loggedUser } from "../../../../redux/slices/userSlice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [show, setShow] = React.useState("");
  const [loginuser, setloginuser] = React.useState({
    email: "",
    password: "",
  });
  const getLoginValue = (e) => {
    const { name, value } = e.target;
    setloginuser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const Login = async () => {
    axios.post(`${baseUrl}/loginuser`, loginuser).then((dt) => {
      if (dt.data.user) {
        setShow(dt.data.message);

        dispatch(loggedUser(dt.data.user));
        navigate("/user");
      } else {
        setShow(dt.data);
      }
    });
  };
  const onSub = (e) => {
    e.preventDefault();
    Login();
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      {show}
      <form onSubmit={onSub}>
        <input
          type="email"
          name="email"
          placeholder="email.."
          value={loginuser.email}
          onChange={getLoginValue}
        />
        <input
          type="password"
          name="password"
          placeholder="password.."
          value={loginuser.password}
          onChange={getLoginValue}
        />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}
