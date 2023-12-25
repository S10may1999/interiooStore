import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../../component/firebaseConfig/FirebaseConfig'


const LoginPage = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate()
  const loginBtn=async()=>{
    try {
      if(email ===""| password===""){
        return toast.error("Fields can not be empty !!")
      }
      else if(email==="admin@interioo.com" && password==="123456789"){
        window.localStorage.setItem("user",JSON.stringify({"email":"admin@interioo.com","password":"123456789"}));
        navigate("/admin")
      }
      else{
        const userLoginDetails=await signInWithEmailAndPassword(auth,email,password);
        window.localStorage.setItem("user",JSON.stringify(userLoginDetails));
        toast.success("Succefully Login !!")
        navigate("/")
      }
    } catch (error) {
        toast.error(error)      
    }
  }
  return (
    <div className='formMain'>
      <div className='logo'>
          <h1>interioo</h1>
          <h3>Login</h3>
      </div>
      <div>
        <div className='registerForm'>
          <label >Email </label>
          <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 

          <label >Password </label>
          <input type='text' placeholder='Enter Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> 

          <div className='btn'>
            <button onClick={loginBtn}>Login</button>
          </div>
        </div>
        <div className='nextpageroute'>
            <p>Don't you have Account? <Link to="/register" id='nxtpg'>Click here to Register</Link></p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
