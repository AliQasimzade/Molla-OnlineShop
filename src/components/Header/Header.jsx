import React, {memo} from "react";
import Logo from "./Logo";
import HeaderLinks from "./HeaderLinks";
import { HeaderContainer, HeaderWrapper } from "./HeaderStyled";
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Logo />
        <HeaderLinks />
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default memo(Header);
