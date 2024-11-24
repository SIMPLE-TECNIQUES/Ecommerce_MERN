import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../Assets/upload_area.svg';
import {message} from 'antd';

const AddProduct = () => {
 
    const [image, setImage] = useState(false);
    const [productDetails, setproductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
        quantity:"",
    })

    const handleImgae = (e)=>
    {
       setImage(e.target.files[0]);
    }

    const changeHandler = (e) =>
    {
        setproductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const AddProduct = async() =>
    {
      console.log(productDetails);
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append('product',image);

      await fetch('https://ecommerce-backend12.onrender.com/upload',{
        method:'POST',
        headers:
        {
            Accept:'application/json',
        },
        body:formData
      })
      .then((res)=>res.json())
      .then((data)=>
        {
          responseData=data
        })

        if(responseData.success)
        {
            product.image=responseData.image_url;
            await fetch('https://ecommerce-backend12.onrender.com/addproduct',{
                method:"POST",
                headers:
                {
                    Accept:'application/json',
                   'content-Type':'application/json',
                },
                body:JSON.stringify(product),
            })
            .then((res)=>res.json())
            .then((data)=>
            {
                 data.success? message.success('Product Added') : message.error("Failed")
            })
            }
    }

  return (
    <div className='add-product'>
       <div className='add-product-itemfield'>
           <p>Product Title</p>
           <input value={productDetails.name} onChange={changeHandler} type='text' name='name' placeholder='Type here' />
       </div>
       <div className='add-product-price'>
        <div className='add-product-itemfield'>
           <p>Price</p>
           <input value={productDetails.oldprice} onChange={changeHandler} type='text' name='old_price' placeholder='Type here' />
        </div> 
        <div className='add-product-itemfield'>
           <p>Offer Price</p>
           <input value={productDetails.newprice} onChange={changeHandler} type='text' name='new_price' placeholder='Type here' />
        </div> 
       </div>
       <div className='add-product-price'>
       <div className='add-product-itemfield'>
           <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name='category' id='' className='add-product-selector'>
                <option value="women">Women</option>
                <option value="men">men</option>
                <option value="kid">Kid</option>
            </select>
           
        </div> 
        <div className='add-product-itemfield'>
            <p>Quantity</p>
           <input value={productDetails.oldprice} onChange={changeHandler} type='text' name='quantity' placeholder='Type here' />
        </div>
        </div>
        <div className='add-product-itemfield'>
             <label htmlFor='file-input' >
                 <img src={ image ? URL.createObjectURL(image)  : upload_area} alt='' className='addproduct-thumbnail-img' />
             </label>
             <input onChange={handleImgae} type='file' name='image' id='file-input' hidden />
        </div> 
        <button onClick={()=>{AddProduct()}} className='add-product-btn'>ADD</button>
    </div>
  )
}

export default AddProduct;
 