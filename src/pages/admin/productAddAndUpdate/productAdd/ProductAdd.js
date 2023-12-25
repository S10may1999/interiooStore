import React, { useContext, useState } from 'react'
import '../../../userCredentials/RegisterPage/RegisterPage.css'
import { toast } from 'react-toastify';
import { fireDB } from '../../../../component/firebaseConfig/FirebaseConfig';
import MyContext from '../../../../context/MyContext';
import Loader from '../../../../component/loader/Loader'


const ProductAdd = () => {

  const context=useContext(MyContext);
  const {loading,addProduct,setAddProduct,productAddBtn}=context;  
  
  

  return (
    <div className='formMain'>
      {loading&&<Loader/>}
      <div className='logo'>
          <h1>interioo</h1>
          <h3>Add Product</h3>
      </div>
      <div>
        <div className='registerForm'>
          <label >Product Name </label>
          <input type='text' value={addProduct.productName} onChange={(e)=>setAddProduct({...addProduct,productName:e.target.value})} placeholder='Enter Your Product Name'/> 
          
          <label >Product Price </label>
          <input type='text' value={addProduct.productPrice} onChange={(e)=>setAddProduct({...addProduct,productPrice:e.target.value})} placeholder='Enter Product Price'/> 

          <label >Category </label>
          <input type='text' value={addProduct.category} onChange={(e)=>setAddProduct({...addProduct,category:e.target.value})} placeholder='Enter Category Name'/> 

          <label >Product Image Url </label>
          <textarea id='textarea1' value={addProduct.productImage} onChange={(e)=>{
            const collect=require('collect.js');
  
            const myArr=(e.target.value).split(",")
            const newCollection=collect(myArr);
            const newObj=newCollection.toArray();
            console.log(newObj)
            setAddProduct({...addProduct,productImage:newObj})
          
          }
            
            } rows="6"  type='text' placeholder="Use ',' to sepreate image url, in case of multiple images"/> 

          <label >Product Description </label>
          <textarea id='textarea1' rows="6"  type='text' value={addProduct.description} onChange={(e)=>setAddProduct({...addProduct,description:e.target.value})} placeholder='Product Description'/> 

          <div className='btn'>
            <button onClick={productAddBtn}>Register Product</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAdd
