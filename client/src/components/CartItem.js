import React from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'

function CartItem({item, qtyChangeHandler, removeHandler}) {
 return (
  <div className="cartitem">
   <div className="cart_image">
    <img src={item.imageUrl} alt={item.name}/>
   </div>
   <Link to={`/product/${item.product}`} className="cartitem_name">
    <p>{item.name}</p>
   </Link>
   <p className="cartitem_price">${item.price}</p>
   <select className="cartitem_select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
    {[...Array(item.countInStock).keys()].map(el => (
     <option key={el+1} value={el+1}>{el+1}</option>
    ))}
   </select>

   <button className="cartitem_deleteBtn" onClick={() => removeHandler(item.product)}>
    <i className="fas fa-trash" ></i> 
   </button>
  </div>
 )
}

export default CartItem
