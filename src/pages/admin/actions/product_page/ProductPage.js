import React, { useContext } from 'react'
import MyContext from '../../../../context/MyContext'
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import Loader from '../../../../component/loader/Loader'


const ProductPage = () => {

  const context=useContext(MyContext);
  const {loading,product,deleteProduct,editHandle}=context;

  return (
    <div>
      <table id='customers'>
        {loading && <Loader/>}
        <tr>
          <th>sr.no.</th>
          <th>Product Image</th>
          <th>Product ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {product.map((item,index)=>{
          return(
            <tr>
            <td>{index+1}</td>
            <td><img id='image' src={item.productImage[0]}/></td>
            <td>{item.productId}</td>
            <td>{item.productName}</td>
            <td>{item.productPrice}</td>
            <td>{item.category}</td>
            <td>
              <span>
                <Link id='edit' to="/admin/product-update"><span  onClick={()=>editHandle(item)}><CiEdit/></span></Link>
                <span id='delete' onClick={()=>deleteProduct(item)}><MdDeleteOutline/></span>
              </span>
            </td>
          </tr>
          )  
        })}
        
      </table>
      
    </div>
  )
}

export default ProductPage
