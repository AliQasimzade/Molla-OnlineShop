import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
const WishListBreadCrumbContainer = styled.div`
 width: 100%;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 40px;
`;

const WishListBreadCrumbMenu = styled.ul`
  display: flex;
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
const WishListBreadCrumbMenuListIcon = styled(IoChevronForward)`
  color: #777;
`;

const WishListBreadCrumbMenuList = styled.li``;
const WishListBreadCrumbMenuListLink = styled(Link)`
  color: #777;
  &:hover {
  color: #c96;
 }
`;
export {
  WishListBreadCrumbContainer,
  WishListBreadCrumbMenu,
  WishListBreadCrumbMenuList,
  WishListBreadCrumbMenuListLink,
  WishListBreadCrumbMenuListIcon,
};
