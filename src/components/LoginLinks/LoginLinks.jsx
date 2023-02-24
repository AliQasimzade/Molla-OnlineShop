import React from 'react'
import { Arrow, Links, Text_container } from "../CartLinks/CartLinksStyle"
import { Container, ListContainer, Wrapper,  } from './LoginLinksStyle'

const LoginLinks = () => {
  return (
    <>
    <Container>
        <Wrapper>
            <ListContainer>
                <Text_container>
                    <Links to="/">Home</Links>
                </Text_container>
                <Text_container>
                    <Arrow/>
                </Text_container>
                <Text_container>
                    <Links to="/login">Login</Links>
                </Text_container>
            </ListContainer>
        </Wrapper>
    </Container>
    
    </>
  )
}

export default LoginLinks