import React from 'react'
import { MdDeleteOutline } from "react-icons/md";
import './CartProduct.css'


const CartProduct = () => {
  return (
    <div className='productCartMain'>
      <div className='productImage'>
        <img id='cartproductimage' src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536'/>
      <div className='productName'>
        <div id='productTitle'>this is product Name</div>
        <div id='amount'>₹2500</div>
      </div>
      </div>
      <div className='actionBtn'>
        <div className='incrementordecrment'>
            <button>-</button>
            <span>0</span>
            <button>+</button>
        </div>
       <div className='deleteBtn'>
          <span>Delete</span>
       </div>
      </div>
    </div>
  )
}

export default CartProduct
