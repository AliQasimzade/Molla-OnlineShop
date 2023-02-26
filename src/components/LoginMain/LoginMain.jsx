import axios from "axios";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import {
  Arrow,
  Button,
  Content,
  ContentTabs,
  FormBox,
  FormGroup,
  FormTab,
  Input,
  Label,
  Main,
  NavItem,
  NavItemInner,
  NavItems,
  ActiveContent,
  ActiveNavItem,
} from "./LoginMainStyle";
import { loggedUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const LoginMain = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const lastNameRef = useRef();
  const firstNameRef = useRef();
  const pattern = /^\s+$/g;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleLogin = (e) => {
    e.preventDefault();
    if (emailRef.current.value === "" && passwordRef.current.value === "") {

      toast.error("Inputs are empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (
      emailRef.current.value === "" ||
      pattern.test(emailRef.current.value)
    ) {
      toast.error("Email input is empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (
      passwordRef.current.value === "" ||
      pattern.test(passwordRef.current.value)
    ) {
      toast.error("Password input is empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Email is not valid !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (passwordRef.current.value.length < 8) {
      
      toast.error("Password minimum 8 characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      axios
        .post(`${baseUrl}/loginuser`, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then((res) => {
          if (res.data === "This user is not registered") {
            throw new Error(res.data);
          } else {
              
            const user = {userName:res.data.user.name, user_id:res.data.user._id}
            
            dispatch(loggedUser(user))
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/");
            }, 1200);
          }
        })
        .catch((err) => {
           
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      registerEmailRef.current.value === "" &&
      registerPasswordRef.current.value === "" &&
      firstNameRef.current.value === "" &&
      lastNameRef.current.value === ""
    ) {
      
      toast.error("Inputs are empty", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    }else if(firstNameRef.current.value === "" || pattern.test(firstNameRef.current.value)) {
          
        toast.error("First name input is empty !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
    }else if(lastNameRef.current.value === "" || pattern.test(lastNameRef.current.value)) {
          
        toast.error("Last name input is empty !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
    } else if (
      registerEmailRef.current.value === "" ||
      pattern.test(registerEmailRef.current.value)
    ) {
      
      toast.error("Email input is empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (
      registerPasswordRef.current.value === "" ||
      pattern.test(registerPasswordRef.current.value)
    ) {
      
      toast.error("Password input is empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (!emailRegex.test(registerEmailRef.current.value)) {
      
      toast.error("Email is not valid !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else if (registerPasswordRef.current.value.length < 8) {
      
      toast.error("Password minimum 8 characters", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      axios
        .post(`${baseUrl}/registeruser`, {
          email: registerEmailRef.current.value,
          password: registerPasswordRef.current.value,
          name:firstNameRef.current.value,
          surname:lastNameRef.current.value
        })
        .then((res) => {
          if (res.data === "This user already exsist") {
            throw new Error(res.data);
          } else {
              
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            setShow(true)
          }
        })
        .catch((err) => {
           
          toast.error(err.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  return (
    <>
      <Main>
        <ToastContainer />
        <FormBox>
          <FormTab>
            <NavItems>
              <NavItem
                onClick={() => setShow(true)}
                className={show === true && "login"}
              >
                <NavItemInner>Sign in</NavItemInner>
              </NavItem>
              <NavItem
                onClick={() => setShow(false)}
                className={show === false && "register"}
              >
                <NavItemInner>Register</NavItemInner>
              </NavItem>
            </NavItems>
            <ContentTabs>
              <Content className={show == true ? "active" : "passiv"}>
                <FormGroup>
                  <Label>Email address *</Label>
                  <Input type="email" ref={emailRef} />
                </FormGroup>
                <FormGroup>
                  <Label>Password *</Label>
                  <Input type="password" ref={passwordRef} />
                </FormGroup>
                <Button onClick={handleLogin}>
                  LOG IN
                  <Arrow />
                </Button>
              </Content>
              <Content className={show == false ? "active" : "passiv"}>
                <FormGroup>
                  <Label>First name *</Label>
                  <Input ref={firstNameRef} />
                </FormGroup>
                <FormGroup>
                  <Label>Last Name *</Label>
                  <Input ref={lastNameRef} />
                </FormGroup>
                <FormGroup>
                  <Label>Email address *</Label>
                  <Input ref={registerEmailRef} />
                </FormGroup>
                <FormGroup>
                  <Label>Password *</Label>
                  <Input type="password" ref={registerPasswordRef} />
                </FormGroup>
                <Button onClick={handleRegister}>
                  Sign up
                  <Arrow />
                </Button>
              </Content>
            </ContentTabs>
          </FormTab>
        </FormBox>
      </Main>
    </>
  );
};

export default LoginMain;
