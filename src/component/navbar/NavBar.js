import React from 'react';
import './NavBar.css'
import { CiHome } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { FaOpencart } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import ProductCard from '../productcard/ProductCard';
import { Link,useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from "react-icons/pi";



const NavBar=()=>{
    const navigator=useNavigate()
    const users=JSON.parse(window.localStorage.getItem("user"));
    const logoutFunction=()=>{
        localStorage.clear();
        navigator('/login')
    }
    return(
        <div>
            <div className='nav'>
            <Link to='/' id="logo">Interioo</Link>
            <ul>
                <li><Link to="/" id='page'>Home</Link></li>
                <li><Link id='page'>Products</Link></li>
                {users?<li><a onClick={logoutFunction} id='page'> Logout</a></li>:<li><Link to="/login" id='page'> Sign In</Link></li>}
                <input placeholder='Search here...'/>
                <button>Search</button>
                <span id="cartBtn">
                    <PiShoppingCartLight style={{fontSize:20,marginRight:10}}/>
                    <span id='cartCount'>0</span>
                </span>
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