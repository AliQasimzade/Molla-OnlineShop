import React from 'react'
import {
    Section2,
    Wrapper,
    Text_container,
    Links,
    Arrow,
 
} from "./CartLinksStyle"
const CartLinks = () => {
  return (
    <>
         <Section2>
        <Wrapper>
          <Text_container>
            <Links to ="/">Home</Links>
          </Text_container>
          <Text_container>
            <Arrow/>
          </Text_container>
          <Text_container>
            <Links to = "/shopping cart">Shopping Cart</Links>
          </Text_container>
        </Wrapper>
      </Section2>
    </>
  )
}

export default CartLinks