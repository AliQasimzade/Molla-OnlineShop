import React from 'react'
import { LogoImage,LogoContainer } from './HeaderStyled'
import ImageLogo from "../../assets/images/logo.png"
const Logo = () => {
  return (
    <LogoContainer to="/">
      <LogoImage src={ImageLogo} alt="logo"/>
    </LogoContainer>
  )
}

export default Logo
