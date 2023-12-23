import React from 'react'

const ProductPage = () => {
  return (
    <div>
      <table id='customers'>
        
        <tr>
          <th>Product Image</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Customer Name</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
        <tr>
            <td><img id='image' src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536'/></td>
            <td>p-123</td>
            <td>Furniture</td>
            <td>₹25000</td>
            <td>sandeep</td>
            <td>thane</td>
            <td>
              edit and delete 
            </td>
          </tr>
        
      
      </table>
      
    </div>
  )
}

export default ProductPage
