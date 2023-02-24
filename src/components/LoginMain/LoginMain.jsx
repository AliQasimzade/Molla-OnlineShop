import React, { useState } from 'react'
import { Arrow, Button, Content, ContentTabs, FormBox, FormGroup, FormTab, Input, Label, Main, NavItem, NavItemInner, NavItems , ActiveContent, ActiveNavItem } from './LoginMainStyle'

const LoginMain = () => {

    const [show , setShow ] = useState(true);
  
  return (
    <>
        <Main>
            <FormBox>
                <FormTab>
                    <NavItems>
                          <NavItem 
                           onClick={()=>setShow(true)}
                          className={show === true && "login"}>
                          
                            <NavItemInner>Sign in</NavItemInner>
                        </NavItem>
                        <NavItem  
                            onClick={()=>setShow(false)}
                            className={show === false && "register"}>
                            <NavItemInner>Register</NavItemInner>
                        </NavItem>
                    </NavItems>
                    <ContentTabs>
                        <Content className= { show == true ? "active" : "passiv"}>
                            <FormGroup>
                                <Label>Email address *</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password *</Label>
                                <Input/>
                            </FormGroup>
                        </Content>
                        <Content className= { show == false ? "active" : "passiv"}>
                            <FormGroup>
                                <Label>First name *</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name *</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email address *</Label>
                                <Input/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Password *</Label>
                                <Input/>
                            </FormGroup>
                        </Content>
                    </ContentTabs>
                    
                    <Button>
                        LOG IN
                        <Arrow/>
                    </Button>
                </FormTab>
            </FormBox>
        </Main>
    </>
  )
}

export default LoginMain