import styled from "styled-components";
import {Link} from "react-router-dom";
import bgBannerImage from "../../assets/images/page-header-bg.jpg";

const CheckoutHeaderText = styled.h1`
  font-size: 2.8rem;
  font-weight: 500;
  cursor: pointer;
`;
const BackGroundImage = styled.div`
  background-image: url(${bgBannerImage});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  padding: 4.6rem;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
const CheckOutUl = styled.ul`
     display: flex;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 10px;
    width: 1188px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
 
`;
const CheckOutLi = styled.li``;
const ChekOutLiIcon = styled.span`
  font-size: 12px;
`;
const CheackOutIcon = styled(Link)`
  color: black;
  &:hover {
    color: #c96;
    cursor: pointer;
    transition: 0.3s all linear;
  }
`;
const Line = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #f4f4f4;
`;
const InputHeaderText = styled.h2`
  padding-top: 25px;
`;
const CheckOutInput = styled.input`
  width: 50%;
`;
const InputLabel = styled.label`
  margin-top: 35px;
`;
const InputKeeper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const InputCheckout = styled.input`
  width: 90%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 7px;
  border: 1px solid black;
  @media (max-width: 501px) {
    width: 100%;
  }
  @media (min-width: 501px) and (max-width: 768px) {
    width: 96%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-left: 0px;
    width: 97%;
  }

  &:focus {
    outline-color: #c96;
    background: none;
    padding-top: 8px;
    padding-bottom: 8px;
    border: 1px solid #c96;
    border-radius: 0px !important;
  }
`;


const Container = styled.div`
      display: flex;

    align-items: baseline;
    gap: 10px;
    width: 1188px;
    max-width: 100%;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1.4rem;
    padding-bottom: 1.4rem;
  @media (max-width: 501px) {

    flex-direction: column;
  }
  @media (min-width: 501px) and (max-width: 768px) {
    flex-direction: column;

  }
  @media (min-width: 769px) and (max-width: 1024px) {

    flex-direction: column;
  }
`;
const LeftInputs = styled.div`
  width: 65%;
  @media (max-width: 501px) {
    width: 100%;
  }
  @media (min-width: 501px) and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
`;
const UpInputs = styled.div`
  display: flex;
  @media (max-width: 501px) {
    flex-direction: column;
  }
`;
const RightBillings = styled.div`
  width: 35%;
  border: 1px dashed #3333;
  border-radius: 5px;
  @media (max-width: 501px) {
    width: 100%;
    margin-top: 2rem;
  }
  @media (min-width: 501px) and (max-width: 768px) {
    width: 98%;
    margin-top: 30px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 98.5%;
    margin-top: 30px;
  }
`;
const Billing = styled.div`
  margin: 0 auto;
  width: 80%;
`;
const BillingHeader = styled.h1`
  font-size: 27px;
  padding-top: 15px;
`;
const ProductsTotal = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Text = styled.p`
  margin-top: 15px;
  font-weight: 600;
  font-size: 15px;
`;
const ColoredText = styled(Text)`
  color: #c96;
  font-weight: 400;
  font-size: 20px;
`;
const OrderButton = styled.button`
  width: 100%;
  padding: 9px;
  margin-bottom: 22px;
  margin-top: 15px;
  border: 1px solid #c96;
  border-radius: 3px;
  background: none;
  color: #c96;
  &:hover {
    background-color: #c96;
    color: white;
    cursor: pointer;
    transition: 0.3s all linear;
  }
`;
const ProductText = styled.span`
  font-weight: 400;
  font-size: 15px;
`;
const ButtonPar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  CheckoutHeaderText,
  BackGroundImage,
  CheckOutUl,
  CheckOutLi,
  ChekOutLiIcon,
  CheackOutIcon,
  Line,
  InputHeaderText,
  CheckOutInput,
  LeftInputs,
  RightBillings,
  Container,
  InputLabel,
  InputCheckout,
  InputKeeper,
  UpInputs,
  BillingHeader,
  Billing,
  ProductsTotal,
  Text,
  ProductText,
  ColoredText,
  OrderButton,
  ButtonPar,
};