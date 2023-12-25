import React, { useContext, useEffect, useState } from 'react'
import '../OrderPage/OrderPage.css'
import MyContext from '../../../../context/MyContext';

const CustomerPage = () => {
  const [status,setStatus]=useState("active")
  const [colors,setColors]=useState('#dfda6a');
  const context=useContext(MyContext);
  const {userDetails}=context;

  try {
    useEffect(() => {
      const storedStatus = JSON.parse(window.localStorage.getItem('customerStatus'));
      console.log("this is sored: "+storedStatus?.updatedcolor)
      if (storedStatus) {  
        setStatus(storedStatus?.updatedstatus);
        setColors(storedStatus?.updatedcolor);
      }
    }, []);
  } catch (error) {
    window.localStorage.setItem('customerStatus', JSON.stringify({ "updatedcolor": "#dfda6a", "updatedstatus": "active" }));
  }

  const statusChange = (e) => {
    const selectedStatus = e.target.value;
    const colorLst=["#dfda6a","#df6a7c"]
      let newColor="";
    if (selectedStatus === 'active') {
        newColor=colorLst[0]
    }else {
      newColor=colorLst[1]
    }
    console.log("before storing the color"+colors)
    setStatus(selectedStatus);
    console.log("after selecting color: "+newColor)
    setColors(newColor);
    console.log("after setting the color: "+colors)
    // Store the updated status and color in localStorage
    window.localStorage.setItem('customerStatus', JSON.stringify({ "updatedcolor": colors, "updatedstatus": selectedStatus }));
  };

  return (
    <div>
      <table id='customers'>
        
        <tr>
          <th>sr.no.</th>
          <th>Customer Image</th>
          <th>Product Name</th>
          <th>Product Email</th>
          <th>Product Mobile</th>
          <th>Customer Orders</th>
          <th>Current status</th>
          <th>Active Status</th>
        </tr>
        
        {userDetails.map((item,index)=>{
          return(
            <tr>
            <td>{index+1}</td>
            <td><img id='image' src='https://camo.githubusercontent.com/0eacd79d5eb9d548c7358aed9fe6ac6223fcff1e88043a7f109316eb68bcd6c7/68747470733a2f2f7069632e706e6e65742e6465762f32353678323536'/></td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>+91-{item.mobile}</td>
            <td>0</td>
            <td>{item.status}</td>
            <td>
              <select className='statusOption'  onChange={statusChange} style={{backgroundColor: colors,}} value={status}>
                <option value="active">active</option>
                <option value="blocked">blocked</option>
              </select>  
            </td>
          </tr>
          );
        })}
        
      
      </table>
      
    </div>
  )
}

export default CustomerPage;
