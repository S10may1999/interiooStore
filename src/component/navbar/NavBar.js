import React, { useEffect } from 'react';
import './NavBar.css'
import { CiHome } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import ProductCard from '../productcard/ProductCard';
import { Link,useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";
import {useSelector} from 'react-redux';


const NavBar=()=>{
    const cartItem=useSelector((state)=>state.cart);
    const userLoggied=JSON.parse(window.localStorage.getItem("user"));
    useEffect(()=>{
        window.localStorage.setItem("cart",JSON.stringify(cartItem));
    },[cartItem])

    const navigator=useNavigate()
    const users=JSON.parse(window.localStorage.getItem("user"));
    const logoutFunction=()=>{
        localStorage.clear();
        navigator('/login')
    }
    return(
        <div>
            <div className='nav'>
            {users?.email=="admin@interioo.com"?<Link to='/admin' id="logo">Interioo</Link>:<Link to='/' id="logo">Interioo</Link>}
            <ul>
                {users?.email=="admin@interioo.com"?<Link to="/admin" id='page'><li>Dashboard</li></Link>:<Link to="/" id='page'><li>Home</li></Link>}
                {users?.email=="admin@interioo.com"?<Link id='page'><li>Report</li></Link>:<Link id='page'><li>Products</li></Link>}
                {users?<a onClick={logoutFunction} id='page'><li> Logout</li></a>:<Link to="/login" id='page'><li> Sign In</li></Link>}
                <input placeholder='Search here...'/>
                <button>Search</button>
                <Link to="/cart">
                {users?.email=="admin@interioo.com"?"":<span id="cartBtn">
                    <PiShoppingCartLight style={{fontSize:20,marginRight:10}}/>
                    {userLoggied?<span id='cartCount'>{cartItem.length !=0?cartItem.length:0}</span>:<span id='cartCount'>0</span>}
                </span>}
                </Link>
            </ul>
            
        </div>
        <div className='mobileNav'>
            {/* top search and name in mobile  */}
            <div className='nameAndSearch'>
            <a href='#' id="logo">Interioo</a>
            </div>
            <div>
            <input placeholder='Search here...'/>
            <button>Search</button>
            </div>
            {/*end top search and name in mobile  */}

            {/* content will be shown here */}
            <div className='content'>
            <ProductCard/>
            </div>
            
            {/*end content will be shown here */}
            
            {/* bottom bar  */}
            <div className='navbottom'>
                
                
                    <a><CiHome/></a>                    
                    <a><CgMenuGridO /></a>
                    <a><FaOpencart /></a>
                    <a><AiOutlineLogin /></a>
            </div>

            {/* end bottom bar  */}
        </div>
        </div>


    )
}

export default NavBar;