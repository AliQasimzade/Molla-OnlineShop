import React from 'react';
import './adminlogin.css';
import axios from 'axios';
import session from 'redux-persist/lib/storage/session';


export default function AdminLogin({setCurrentAdmin}) {
const baseUrl = import.meta.env.VITE_BASE_URL
    const [Loginadmin,setLoginAdmin] = React.useState({
        email:"",
        password:""
    })
    const getAdminLoginInfo = (e) => {
        const {name,value} = e.target;
        setLoginAdmin((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const AxiosLogin = async () => {
        try {
            const Admin = await axios.post(`${baseUrl}/loginadmin`,Loginadmin);
            
            if(Admin.data.admin){
                sessionStorage.setItem("currentAdmin",JSON.stringify(Admin.data.admin))
               setCurrentAdmin(JSON.parse(sessionStorage.getItem("currentAdmin")))
            }
            
        } catch (error) {
            console.log("error:",error)
        }
        
    }
    const Login = (e) => {
        e.preventDefault();
        AxiosLogin();

    }
  return (
    <div className='adminlogin'>
        <h2>Admin Login</h2>
        <form onSubmit={Login} className='admin-login'>
            <div className='input-box'>
                <p>Email:</p>
                <input onChange={getAdminLoginInfo} name='email' type="email" placeholder='email..' value={Loginadmin.email} />
            </div>

            <div className='input-box'>
                <p>Password:</p>
                <input onChange={getAdminLoginInfo} name='password' type="password" placeholder='password..' value={Loginadmin.password} />
            </div>
            <input className='btn-admin-login' type="submit" value="Login" />

        </form>
    </div>
  )
}
