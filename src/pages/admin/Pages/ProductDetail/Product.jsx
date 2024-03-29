import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function Product() {
    const products = useSelector(state => state.products.products)
    const params = useParams();
    const baseUrl = import.meta.env.VITE_BASE_URL
    console.log(params)
    const user = useSelector(state => state.persistedReducer.user.user.name);
    const [product_id,setProductId] = useState("" || params._id);
    const product =products?.find(o=>o._id === product_id);
    const [order,setOrder] = useState({
        user_id:user?._id,
        name:user?.name,
        email:user?.email,
        product:product?.title,
        count:0,
        price:product?.price,
        isSend:false
    })
    const getOrder = (e) => {
        setOrder((prev)=>{
            return {
                ...prev,
                count:Number(e.target.value)
            }
        })
    }
    const [show,setShow] = useState("");
    const postOrd = async () => {
        axios.post(`${baseUrl}/postorder`,order).then(dt=>{
            if(dt.data.order){
                setShow(dt.data.message)

            }
            else{
                setShow("Order is failed")
            }
        })
    }
    const Ord = (e) => {
        e.preventDefault();
        postOrd()
        console.log(order)
    }
 
  return (
    <div>
        <div><strong>Title:</strong>{product?.title}</div>
        <div><strong>Description:</strong>{product?.description}</div>
        <div><strong>Price:</strong>{product?.price}</div>
        <div style={{display:"flex",alignItems:"center"}}><strong>Image:</strong><img style={{width:"100px"}}  alt="product" src={product?.image} /></div>
        {user && <form onSubmit={Ord}>
            <input onChange={getOrder} value={order.count} type="number" placeholder='number..' name="number" />

            <input type="submit" value="order" />

        </form>}
        {show}
    </div>
  )
}
