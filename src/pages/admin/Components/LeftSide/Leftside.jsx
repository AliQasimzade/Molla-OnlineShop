import React from 'react';
import './leftside.css';
import { Link } from 'react-router-dom';
export default function Leftside({currentAdmin,setCurrentAdmin}) {
    const location = window.location.pathname;
    const Logout = () => {
        window.location.href = '/admin';
        sessionStorage.removeItem("currentAdmin");
        setCurrentAdmin(null);

    }
  return (
    <div className='leftside'>
        <h2>Admin Panel,{currentAdmin?.name}</h2>
        <div className='admin-container'>
            <Link className='link' style = {{color:location==='/admin'?"red":"black"}} to='/admin'>Admins</Link>
            <Link className='link' style = {{color:location==='/admin/products'?"red":"black"}} to='/admin/products'>Products</Link>
            <Link className='link' style = {{color:location==='/admin/orders'?"red":"black"}} to='/admin/orders'>Orders</Link>
            <Link className='link' style = {{color:location==='/admin/users'?"red":"black"}} to='/admin/users'>Users</Link>
            <div className='link' onClick={Logout}>Logout</div>
        </div>
    </div>
  )
}
