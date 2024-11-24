import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../Assets/cross_icon.png';
const ListProduct = () => {

  const [allproducts,setAllproducts] = useState([]);

  const fetInfo = async() =>
  {
    await fetch('https://e-commerce-nfmv.onrender.com/allproducts')
    .then((res)=>res.json())
    .then((data)=>
      {
        setAllproducts(data);
      });
  }

  useEffect(()=>
  {
    fetInfo();
  },[])

  const removeProduct = async(id)=>
  {
    await fetch('https://e-commerce-nfmv.onrender.com/removeproduct',
  {
    method:'POST',
    headers:{
      Accept:'application/json',
      'content-type':'application/json',
    },
    body:JSON.stringify({id:id})
  })
  await fetInfo();
  }

  return (
    <div className='list-product'>
        <h1>All Product List</h1>
     <div className='listproduct-format-main'>
         <p>Products</p>
         <p>Title</p>
         <p>Old Price</p>
         <p>New Price</p>
         <p>Quantity</p>
         <p>Category</p>
         <p>Remove</p>
    </div>
     <div className='listproduct-allproducts'>
       <hr/>
      {allproducts.map((product,index)=>
      {
           return <><div key={index} className='listproduct-format-main list-product-format'>
                  <img src={product.image} alt='product-img' className='list-product-icon' />
                  <p>{product.name}</p>
                  <p>${product.old_price}</p>
                  <p>${product.new_price}</p>
                  <p>{product.quantity}</p>
                  <p style={{textAlign:'center'}}>{product.category}</p>
                  <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} alt='removeicon' className='listproduct-remove-icon' />
           </div>
           <hr/>
           </> 
      })}
    </div>
    </div>
  )
}

export default ListProduct;
