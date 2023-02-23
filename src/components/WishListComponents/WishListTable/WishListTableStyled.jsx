import styled from "styled-components";
import { MdAddShoppingCart } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const WishListTableContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1188px;
  max-width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const WishListTableContent = styled.table`
  width: 100%;
  color: #212529;
  border-collapse: collapse;
  @media screen and (max-width:991px) {
    border: 0.1rem solid #ebebeb;
  }
`;

const WishListTableHead = styled.thead`
  border-bottom: 1px solid #ebebeb;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
const WishListTableBody = styled.tbody``;
const WishListTableRow = styled.tr`
  border-bottom: 1px solid #ebebeb;
  @media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
    padding: 42px 0 40px 0;
    justify-content: center;
    position: relative;
  }
`;
const WishListTableData = styled.td`
  padding: 30px 0;
  &:nth-child(3) {
    color: #a6c76c;
    font-weight: 400;
  }
  @media screen and (max-width: 991px) {
    &:not(:last-child) {
      display: flex;
      justify-content: center;
      padding: 1px 30px 6px 30px;
    }
    &:last-child {
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 0;
    }
  }
`;
const WishListTableHeadData = styled.th`
  padding: 14px 0;
  text-align: left;
  color: #999999;
  font-size: 14px;
  font-weight: 300;
  &:nth-child(2) {
    padding-right: 40px;
  }
`;
const WishListTableBodyDataContent = styled.div`
  display: flex;
  align-items: center;
`;
const WishListTableBodyDataContentImageContainer = styled.figure`
  margin-right: 28px;
  cursor: pointer;
`;

const WishListTableBodyDataContentImage = styled.img``;
const WishListTableBodyDataContentTitle = styled.span`
  cursor: pointer;
  &:hover {
    color: #c96;
  }
`;
const WishListTableBodyDataContentPrice = styled.span``;
const WishListTableBodyDataContentAddToCartIcon = styled(MdAddShoppingCart)`
  margin-right: 10px;
`;
const WishListTableBodyDataContentAddToCart = styled.button`
  border: 1px solid #c96;
  color: #c96;
  text-transform: uppercase;
  padding: 5.5px 15px;
  outline: none;
  margin: 0 auto;
  display: flex;
  width: 78%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #fff;
  height: 40px;
  transition: 250ms linear;
  &:hover {
    color: #fff;
    background-color: #c96;
  }
  @media screen and (max-width: 991px) {
    width: fit-content;
    padding: 10px 50px;
  }
`;

const WishListTableBodyDataContentRemove = styled.button`
  border: none;
  outline: none;
  transition: all 0.35s;
  display: flex;
  background: none;
  margin: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  font-size: 18px;
  color: #cccccc;
  align-items: center;
  justify-content: flex-end;
  &:hover {
    color: #333333;
  }
`;
const WishListTableBodyDataContentRemoveIcon = styled(AiOutlineClose)``;
export {
  WishListTableRow,
  WishListTableBodyDataContentRemove,
  WishListTableBodyDataContentRemoveIcon,
  WishListTableBodyDataContentAddToCartIcon,
  WishListTableBodyDataContentAddToCart,
  WishListTableBodyDataContentPrice,
  WishListTableBodyDataContentTitle,
  WishListTableBodyDataContent,
  WishListTableBodyDataContentImageContainer,
  WishListTableBodyDataContentImage,
  WishListTableBody,
  WishListTableContainer,
  WishListTableContent,
  WishListTableData,
  WishListTableHead,
  WishListTableHeadData,
};
