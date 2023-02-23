import React from 'react'
import { LogoImage,LogoContainer } from './HeaderStyled'
import ImageLogo from "../../assets/images/logo.png"
const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={ImageLogo} alt="logo"/>
    </LogoContainer>
  )
}

export default Logo
