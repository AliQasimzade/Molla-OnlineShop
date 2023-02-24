import React from 'react'
import {Helmet} from "react-helmet-async"
import LoginLinks from '../../components/LoginLinks/LoginLinks'
import LoginMain from '../../components/LoginMain/LoginMain'

const Login = () => {
  return (
    <div>
        <Helmet>
            <title>Login</title>
        </Helmet>
       <LoginLinks/>
       <LoginMain/>
    </div>
  )
}

export default Login