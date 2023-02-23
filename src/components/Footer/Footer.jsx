import React, {memo} from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterLeft,
  FooterSocialIcons,
  FooterCopyRight,
  FooterMenu,
  FooterMenuList,
  FaceBookIcon,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  PinterestIcon,
} from "./FooterStyled";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLeft>
          <FooterCopyRight>
            Copyright © 2019 Molla Store. All Rights Reserved.
          </FooterCopyRight>
          <FooterMenu>

              <FooterMenuList>
                <Link to="/">Terms Of Use</Link>
              </FooterMenuList>

              <FooterMenuList>
                <Link to="/">Privacy Policy</Link>
              </FooterMenuList>
          </FooterMenu>
        </FooterLeft>

        <FooterSocialIcons>
          <FaceBookIcon title="Facebook"/>
          <TwitterIcon title="Twitter"/>
          <InstagramIcon title="Instagram"/>
          <YoutubeIcon title="Youtube"/>
          <PinterestIcon title="Pinterest"/>
        </FooterSocialIcons>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default memo(Footer);
