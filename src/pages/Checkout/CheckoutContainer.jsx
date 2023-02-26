import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import {
  Container,
  InputLabel,
  InputCheckout,
  LeftInputs,
  RightBillings,
  InputHeaderText,
  InputKeeper,
  UpInputs,
  BillingHeader,
  Billing,
  Line,
  ProductsTotal,
  Text,
  ProductText,
  ColoredText,
  OrderButton,
  ButtonPar,
} from "./CheckoutStyled";
import { useSelector, useDispatch } from "react-redux";
import { resetBasket } from "../../redux/slices/basketSlice";
const CheckOutContainer = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const user_id = useSelector(
    (state) => state.persistedReducer.user.user.user_id
  );

  const basket = useSelector((state) => state.persistedReducer.basket.basket);
  const totalPrice = basket.reduce(
    (acc, val) => acc + val.price * val.count,
    0
  );
  const pattern = /^\s+$/g;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleOrder = (e) => {
    e.preventDefault();
    if (
      (emailRef.current.value === "" && firstNameRef.current.value === "") ||
      lastNameRef.current.value === "" ||
      state === ""
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
    } else if (firstNameRef.current.value === "" ||pattern.test(firstNameRef.current.value)) {
      toast.error("Name input is empty !", {
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
    } else if (state.length < 12 || state.slice(0, 3) !== "994") {
      toast.error("Phone is invalid ", {
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
        .post(`${baseUrl}/postorder`, {
          email: emailRef.current.value,
          name: firstNameRef.current.value,
          surname: lastNameRef.current.value,
          phone: state,
          user_id: user_id,
          products: basket,
        })
        .then((res) => {
          toast.success("Place order is successfully !", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "light",
          });
          setTimeout(() => {
            dispatch(resetBasket());
          }, 3000);
        });
    }
  };

  return (
    <div>
      {basket.length > 0 ? (
        <div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
            theme="light"
          />

          <Container>
            <LeftInputs>
            <InputHeaderText>Your Billings</InputHeaderText>
              <UpInputs>
                <InputKeeper>
                  <InputLabel>First Name * </InputLabel>
                  <InputCheckout ref={firstNameRef} />
                </InputKeeper>
                <InputKeeper>
                  <InputLabel>Last Name * </InputLabel>
                  <InputCheckout ref={lastNameRef} />
                </InputKeeper>
              </UpInputs>
              <UpInputs>
                <InputKeeper>
                  <InputLabel>Phone * </InputLabel>
                  <PhoneInput
                    country={"az"}
                    value={state}
                    onlyCountries={["az"]}
                    onChange={(phone) => {
                      setState(phone);
                    }}
                    isValid={(value, country) => {
                      if (!value.match(/994/)) {
                        return "Invalid value: " + value + ", " + country.name;
                      } else if (!value.match(/994/)) {
                        return false;
                      } else {
                        return true;
                      }
                    }}
                  />
                </InputKeeper>
                <InputKeeper>
                  <InputLabel>Email address * </InputLabel>
                  <InputCheckout ref={emailRef} />
                </InputKeeper>
              </UpInputs>
            </LeftInputs>
            <RightBillings>
              <Billing>
                <BillingHeader>Your Order</BillingHeader>
              </Billing>
              <Billing>
                <Line></Line>
                <ProductsTotal>
                  <Text>Product</Text>
                  <Text>Total</Text>
                </ProductsTotal>
                {basket.map((bas) => (
                  <div key={bas._id}>
                    <ProductsTotal>
                      <ProductText>{bas.title}</ProductText>
                      <ProductText>${bas.price}</ProductText>
                    </ProductsTotal>
                    <Line></Line>
                  </div>
                ))}

                <ProductsTotal>
                  <ColoredText>Total:</ColoredText>
                  <ColoredText>${totalPrice}</ColoredText>
                </ProductsTotal>
                <Line></Line>
                <ButtonPar>
                  <OrderButton onClick={handleOrder}>Order Now</OrderButton>
                </ButtonPar>
              </Billing>
            </RightBillings>
          </Container>
        </div>
      ) : (
        <Container>
          <h1>No item in Cart</h1>
        </Container>
      )}
    </div>
  );
};

export default CheckOutContainer;
