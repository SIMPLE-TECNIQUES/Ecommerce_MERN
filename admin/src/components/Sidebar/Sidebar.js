import React from 'react';
import './Sidebar.css';
import add_product_icon from '../../Assets/Product_Cart.svg';
import { Link } from 'react-router-dom';
import list_product_icon from '../../Assets/listicon.png';


const Sidebar = () => {
  return (
    <div className='sidebar' >
         <Link to={'/addproduct'} style={{textDecoration:"none"}} >
         <div className='sidebar-item'>
             <img src={add_product_icon}  alt='addproduct-icon'/>
             <p>Add Product</p>
         </div>
         </Link>
         <Link to={'/listproduct'} style={{textDecoration:"none"}} >
         <div className='sidebar-item'>
             <img src={list_product_icon}  alt='addproduct-icon'/>
             <p>Product List</p>
         </div>
         </Link>
    </div>
  )
}

export default Sidebar;
