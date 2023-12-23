import React, { useEffect, useState } from 'react'
import './OrderPage.css'

const OrderPage = () => {
  const [status,setStatus]=useState("pending")
  const [colors,setColors]=useState('#dfda6a');

  try {
    useEffect(() => {
      const storedStatus = JSON.parse(window.localStorage.getItem('deliveryStatus'));
      console.log("this is sored: "+storedStatus?.updatedcolor)
      if (storedStatus) {  
        setStatus(storedStatus?.updatedstatus);
        setColors(storedStatus?.updatedcolor);
      }
    }, []);
  } catch (error) {
    window.localStorage.setItem('deliveryStatus', JSON.stringify({ "updatedcolor": "#dfda6a", "updatedstatus": "pending" }));
  }

  const statusChange = (e) => {
    const selectedStatus = e.target.value;
    const colorLst=["#dfda6a","#6adf81","#df6a7c"]
      let newColor="";
    if (selectedStatus === 'pending') {
        newColor=colorLst[0]
    } else if (selectedStatus === 'dis') {
      newColor=colorLst[1]
    } else {
      newColor=colorLst[2]
    }
    console.log("before storing the color"+colors)
    setStatus(selectedStatus);
    console.log("after selecting color: "+newColor)
    setColors(newColor);
    console.log("after setting the color: "+colors)
    // Store the updated status and color in localStorage
    window.localStorage.setItem('deliveryStatus', JSON.stringify({ "updatedcolor": colors, "updatedstatus": selectedStatus }));
  };

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
              <select className='statusOption'  onChange={statusChange} style={{backgroundColor: colors,}} value={status}>
                <option value="pending">Pending</option>
                <option value="dis">Dispatched</option>
                <option value="del">Delivered</option>
              </select>  
            </td>
          </tr>
        
      
      </table>
      
    </div>
  )
}

export default OrderPage
