import React, { useContext, useState } from 'react'
import './RegisterPage.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, fireDB } from '../../../component/firebaseConfig/FirebaseConfig';
import { Timestamp, addDoc, collection } from 'firebase/firestore';
import MyContext from '../../../context/MyContext';


const RegisterPage = () => {

  const [name, setName]=useState("");
  const [email,setEmail]=useState("");
  const [mobile,setMobile]=useState("");
  const [password,setPassword]=useState("");
  const context=useContext(MyContext);
  const {loading,setLoading}=context;
  


  const userCreation=async()=>{
    
    if(name ==="" || email ==="" || mobile ==="" || password ===""){
      return toast.error("All the Fields are required !!")
    }
    else{
      if(name.match(/\d/g)){
        return toast.error("name included an number !!")
    }else if( mobile.length<10 ){
      return toast.error("Invalid mobile number")
    }
    else if(password.length<8){
        return toast.error("Password should be at least 8 character !!")
    }
    else{
        setLoading(true);
        const userInformationAfterCreation=await createUserWithEmailAndPassword(auth,email,password);
        const {user}=userInformationAfterCreation;

        const userDatabaseInformation ={
          "name":name,
          "email":user.email,
          "mobile":mobile,
          "uid":user.uid,
          "status":"active",
          "customerOrder":0,
          "time":Timestamp.now()
        }

        const userRef=collection(fireDB,"users");

        const dataAdd=addDoc(userRef,userDatabaseInformation);
        console.log(dataAdd.id)
        setLoading(false);
        toast.success("User Suucessfully Created.please login !");
        setEmail("");
        setMobile("");
        setName("");
        setPassword("");
        window.location.href='/login'
    }
    
  }
  }
  return (
    <div className='formMain'>
      <div className='logo'>
          <h1>interioo</h1>
          <h3>Register</h3>
      </div>
      <div>
        <div className='registerForm'>
          <label >Full Name </label>
          <input type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/> 
          
          <label >Email </label>
          <input type='text' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/> 

          <label >Mobile No </label>
          <input type='text' placeholder='Enter Your Mobile no.' value={mobile} onChange={(e)=>setMobile(e.target.value)}/> 

          <label >Set Password </label>
          <input type='text' placeholder='Enter Your password' value={password} onChange={(e)=>setPassword(e.target.value)}/> 

          <div className='btn'>
            <button onClick={userCreation}>Register</button>
          </div>
        </div>
        <div className='nextpageroute'>
            <p>Already have Account? <Link to="/login" id='nxtpg'>Click here to login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
