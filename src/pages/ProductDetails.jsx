import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'


function ProductDetails() {
    const [product_,setProduct] = useState({})
    let {id} =useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProduct(response.data))
    },[])
      
    return(
        <>
            
            <button onClick={() => navigate('/')}>Back to Home</button>
            <h1>Product Details</h1>
            <img src={product_.image}/>
            <p >{product_.title}</p>
            <p >{product_.price}</p>
               
            
        </>
    )
}

export default ProductDetails