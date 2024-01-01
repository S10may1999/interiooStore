import React, { useEffect } from 'react'
import Layout from '../../component/layout/Layout'
import './CartPage.css';
import CartProduct from '../../component/cartProduct/CartProduct'

const CartPage = () => {
  return (
    <Layout>
        <div className='cartMain'>
          <div className='heading'>
              Cart
          </div>
          <div className='contentContainer'>
            <div className='produtListContainer'>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
            </div>
            <div className='productTotalContainer'>
                <div className='paymentDetails'>
                  <h3>Order Detail</h3>
                  <div className='amountCost'>
                    <div> Gross Total</div>
                    <div>₹2500</div>                  
                  </div>
                  <div className='gstDetails'>
                    <div>+ Gst:18%</div>
                    <div>₹250</div>
                  </div>
                  <div className='gstDetails'>
                    <div>+ Delivery Charge</div>
                    <div>₹250</div>
                  </div>
                  <div id='line'>
                  </div>
                  <div className='netTotal'>
                    <div>Grand Total</div>
                    <div>₹3000</div>
                  </div>
                </div>
                <div className='couponsSection'>
                   <h3>Apply Coupons</h3>
                </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default CartPage
