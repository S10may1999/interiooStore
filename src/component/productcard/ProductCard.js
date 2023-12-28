import React, { useContext, useState } from "react";
import './ProductCard.css'
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from "../../redux/cartSlice";
import MyContext from "../../context/MyContext";
import Loader from "../loader/Loader";
import { toast } from "react-toastify";


const ProductCard = (props) => {

    let [count,setCount]=useState(0)
    const lst=[];
    for(let i=0;i<props.demoimage?.length;i++){
        lst.push(props.demoimage[i])
    }
    
   const incrementBtn=()=>{
        count=count+1
        if(count>=lst.length){
            setCount(0)
        }else{
        setCount(count)
        }
    }

    const decrementBtn=()=>{
        count=count-1;
        if(count<0){
            setCount(0)
        }else{
            setCount(count)
        }
    }

    // const context=useContext(MyContext);
    // const {addToCart}=context;
   
    const dispatch=useDispatch();
    const addedProduct=useSelector((state)=>state.cart)

    const addProduct=(item)=>{
        const users=JSON.parse(window.localStorage.getItem("user"));
        if(users){
        dispatch(addToCart(item));
        toast.success("Added Successfully !!")
        console.log(addedProduct)
        }else{
            toast.error("please Login to add !")
            setTimeout(()=>{
                window.location.href="/login"
            },800)
        }
    }

    
    
    return (
            <div className="ProductCard">
                <div className="productImage">
                    <img src={lst[count]}/>
                </div>
                <div className="cusrol-tab">
                    <span id="previous" onClick={decrementBtn}>←</span>
                    <span id="next" onClick={incrementBtn}>→</span>
                </div>
                <div className="productDetailsAndAction">
                    <div className="companyname">
                        Interioo
                    </div>
                    <div className="productTitle">
                        {props.pname}
                    </div>
                    <div className="productprice">
                     ₹{props.pprice}
                    </div>
                    <div className="actionButton">
                        <button id="buy">Buy</button>
                        <button id="cart"  onClick={()=>addProduct(props.product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
            
        

    )
}

export default ProductCard