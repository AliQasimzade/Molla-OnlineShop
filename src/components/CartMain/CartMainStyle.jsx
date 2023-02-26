import styled from "styled-components";
import{Link} from "react-router-dom"
import {IoChevronForwardOutline} from "react-icons/io5"
import{GrFormClose} from "react-icons/gr"



const Arrow= styled(IoChevronForwardOutline)`
margin-top: 3px;
color: #777;
`

const Container = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  flex-direction: row;
  gap:10px;
  margin-top: 60px;
  @media(max-width:992px){
    flex-direction: column;
  }
`
const Product_container = styled.div`
  width: 70%;
  padding: 10px;
  @media(max-width:992px){
    width: 100%;
  }
`;
const ProductTitle = styled.div`
  padding: 2rem 0;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  gap:4rem;
  justify-content: space-between;
  @media(max-width:992px){
    display: none;
  }
`;

const Product = styled.div`
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    padding: 3rem 0;
    border-bottom: 1px solid #f4f4f4;
    position:relative;
    @media(max-width: 992px){
      flex-direction:column;
      border: 1px solid #f4f4f4;
    }
`

const Col6 = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media(max-width:992px){
      width: 100%;
      justify-content: center;
    }
`
const ColRight = styled(Col6) `
  @media(max-width:992px){
    flex-direction: column;
    margin-bottom :20px;
  }
`

const Col6_wrapper = styled(Col6)`
width: 78%;
@media(max-width:992px){
  width: 100%;
}
`

const Thead = styled.p`
  color: #777;
`;


const ProductImage = styled.img`
margin-right: 30px;
width: 100%;
height: 100%;
object-fit: cover;
`
const ProductInfo = styled.p`
    color: #333333;
    font-weight: 500;
    font-size: 16px;
    &:hover{
    color: #cc9966; 
    cursor: pointer;

    }
`

const SumProduct = styled(ProductInfo)`
    color: #cc9966; 
`


const PriceButton = styled.div`
border: 1px solid #f4f4f4 ;
padding:  5px 10px; 
display: flex;
`
const Button = styled.button`
    padding: 5px 10px;
    font-size:20px;
    box-sizing: border-box;
    background-color: #fff;
    border: 0;
    color: #777;

`
const Counter = styled.p`
  color: #777;
  padding: 5px 10px;
`

const Card_container = styled.div`
width: 30%;
border:1px dashed #777;
padding:25px;
box-sizing: border-box;
background-color: #f9f9f9;
@media(max-width:992px){
    width: 100%;
  }
`

const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
border-bottom: 1px solid #cccccc;

`
const Text_container = styled.li``;

const PriceTitle = styled.p`
font-size: 16px;
padding:20px 0;
`
const CardTitle = styled(PriceTitle)`
border-bottom: 1px solid #cccccc;
font-weight: 600;
 
`

const TotalTitle = styled(PriceTitle)`
    color: #cc9966; 
    font-weight: 600;
`
const Close = styled(GrFormClose)`
  fill:red;
    font-size: 20px;
    @media(max-width:992px){
      position: absolute;
      top: 10px;
      right: 10px;
      font-size:30px;
    }
 `
 const CloseButton = styled.button`
 border : none;
 outline: none;
 background: none;

 
 `
const CheckoutLink = styled(Link)`
    color: #cc9966;
    border :  1px solid #cc9966;
    padding: 10px;
    text-align: center;
    margin-top: 60px;
    transition: 0.5s;
    display: block;
    &:hover{
        background-color:#cc9966;
        color: white;
        cursor:pointer;
    }
`
 const ProductLink = styled(Link)`
 display:flex;
 align-items: center;
 width: 60px;
 height: 60px;
 `
export {
    Container,
    Product_container,
    ProductTitle,
    Thead,
    Arrow,
    Product,
    Col6,
    Col6_wrapper,
    ProductImage,
    ProductInfo,
    PriceButton,
    Button,
    Counter,
    SumProduct,
    Card_container,
    PriceTitle,
    PriceContainer,
    CardTitle,
    TotalTitle,
    CheckoutLink,
    ColRight,
    ProductLink,
    Text_container,
    Close,
    CloseButton
  };
  