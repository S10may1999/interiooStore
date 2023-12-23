import React, { useState } from "react";
import './ProductCard.css'


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
                        Product Tile
                    </div>
                    <div className="productprice">
                        Price
                    </div>
                    <div className="actionButton">
                        <button id="buy">Buy</button>
                        <button id="cart">Add to Cart</button>
                    </div>
                </div>
            </div>
            
        

    )
}

export default ProductCard