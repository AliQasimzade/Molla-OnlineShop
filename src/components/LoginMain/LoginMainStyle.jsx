import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
const Main = styled.div`
  width: 100%;
  padding: 6rem 0;
  background: url("https://portotheme.com/html/molla/assets/images/backgrounds/login-bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FormBox = styled.div`
  max-width: 575px;
  padding: 3.7rem 6rem 6.4rem;
  background-color: white;
  box-sizing: border-box;
  @media (max-width: 576px) {
    width: 460px;
  }
`;

const FormTab = styled.div``;
const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ebebeb;
`;
const NavItem = styled.li`
  padding: 15px;
  width: 50%;
  &.login {
    border-bottom: 1px solid #cc9966;
  }
  &.register {
    border-bottom: 1px solid #cc9966;
  }
`;
const ActiveNavItem = styled(NavItem)``;
const NavItemInner = styled.p`
  color: #333333;
  font-size: 25px;
  text-align: center;
  font-weight: 600;
`;
const FormGroup = styled.div`
  padding: 20px 0 0;
`;
const Label = styled.label`
  color: #747774;
`;
const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  background-color: #fafafa;
  padding: 12px;
  margin-top: 10px;
  &:focus {
    outline: 1px solid #cc9966;
  }
`;
const Button = styled.button`
  display: flex;
  gap: 1rem;
  border: 1px solid #cc9966;
  background-color: white;
  color: #cc9966;
  width: 110px;
  padding: 10px 13px;
  cursor: pointer;
  margin-top: 30px;
  &:hover {
    color: white;
    background-color: #cc9966;
  }

  @media (max-width: 576px) {
    display: flex;
    gap: 2rem;
    justify-content: center;
    width: 100%;
  }
`;
const Arrow = styled(AiOutlineArrowRight)``;
const ContentTabs = styled.div``;
const Content = styled.div`
   &.active {
    display: block;
  } 
  &.passiv {
    display: none;
  } 
`;
const ActiveContent = styled(Content)`
  display: block;
`;

export {
  Main,
  FormBox,
  FormTab,
  NavItems,
  NavItem,
  NavItemInner,
  FormGroup,
  Label,
  Input,
  Button,
  Arrow,
  ContentTabs,
  Content,
  ActiveContent,
  ActiveNavItem,
};