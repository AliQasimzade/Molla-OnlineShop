import React, { useEffect, useState } from 'react';
import Leftside from '../../Components/LeftSide/Leftside';
import AdminLogin from '../AdminLogin/AdminLogin';
import './products.css';
import axios from 'axios';
export default function Products({currentAdmin,setCurrentAdmin}) {
  const [products,setProducts] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL
  useEffect(()=>{
    axios.get(`${baseUrl}/products`).then(dt=>setProducts(dt.data)).catch(err=>console.log(err))
  },[])
  const [id,setId] = useState("")

  const [updateValues,setUpdateValues] = useState({
    title:"",
    description:"",
    price:"",
    image:"",
  })
  const getUpdateValues = (e) => {
    const {name,value} = e.target;
    setUpdateValues((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })

  }
  
  const getId = (arg) => {
   
    setId(arg)
    console.log(arg)
    const {title,description,price,image} = products.find(o=>o._id === arg)
    setUpdateValues({
      title:title,
      description:description,
      price:price,
      image:image
    })
    console.log(updateValues)
  }
  const updateProduct = async (id) => {
    axios.put(`${baseUrl}/updateproduct/${id}`,updateValues)
    const returned = products.map(val=>{
      return val._id === id ?
      updateValues:
      val
    })
    setProducts(returned)
  }
  const update = (e) => {
    e.preventDefault();
    console.log(id)
    updateProduct(id);
    setId("")

  }
  const deleteProduct = (id) => {
    axios.get(`${baseUrl}/deleteproduct/${id}`);
    const returned = products.filter(o=>o._id !== id);
    setProducts(returned)
  }
  const ProductData = products?.map((obj,ind)=>{
    return <tr key={ind}>
    <th scope="row">{ind + 1}</th>
    <td>{obj.title}</td>
    <td>{obj.description}</td>
    <td>{obj.price}</td>
    <td><img style={{width:"40px"}} alt='img' src={obj.image} /></td>
    <td>
      <button onClick={()=>deleteProduct(obj._id)}>Delete</button>
      <button onClick={()=>getId(obj._id)}>Update</button>
    </td>
  </tr>
  })
  const [addProd,setaddprod] = useState(true);
  const add = () => {
    setaddprod(!addProd)
  }
  const [newprod,setnewprod] = useState({
    title:"",
    description:"",
    price:0,
    image:''
  })


  const addNewProd = (e) => {
    const {name,value} = e.target;
    setnewprod((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  const postProd = async () => {
    axios.post(`${baseUrl}/addproduct`,newprod);
    setProducts([...products,newprod]);
  }
  const onSub = (e) => {
    e.preventDefault();
    postProd()
  }
  return (
    <div className='productss'>
        {
            JSON.parse(sessionStorage.getItem("currentAdmin"))?<>
            <Leftside currentAdmin={currentAdmin}
            setCurrentAdmin={setCurrentAdmin} />
        <div className="products-right">
          <button onClick={add}>AddNew</button>
          {addProd && <form onSubmit={onSub}>
            <input type="text" placeholder='title...' name="title" value={newprod.title} onChange={addNewProd} />
            <input type="text" placeholder='desc...' name="description" value={newprod.description} onChange={addNewProd} />  
            <input type="number" placeholder='price...' name="price" value={newprod.price} onChange={addNewProd} />  
            <input type="text" accept='image/*' placeholder='image...' value={newprod.image} name="image"  onChange={addNewProd} />
            <input type="submit" value="add" />
                      </form>}
          {id !== "" &&<div className="update-products">
            <form onSubmit={update} className='update-form'>
              <input onChange={getUpdateValues} name="title" value={updateValues.title} type="text" placeholder='title' />
              <input onChange={getUpdateValues} name="description" value={updateValues.description} type="text" placeholder='description' />
              <input onChange={getUpdateValues} name="price" value={updateValues.price} type="number" placeholder='price' />
              <input onChange={getUpdateValues} name="image" value={updateValues.image} type="text" placeholder='image' />
              <input type="submit" value="update" />
            </form>
          </div>}
        <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                  <th scope='col'>Update</th>
                </tr>
              </thead>
              <tbody>{ProductData}</tbody>
            </table>
        </div>
            </>:
            <AdminLogin />
        }
        
    </div>
  )
}
