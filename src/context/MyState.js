import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'
import { query, collection, orderBy, onSnapshot, QuerySnapshot, setDoc, doc, deleteDoc,addDoc,Timestamp } from 'firebase/firestore'
import { fireDB } from '../component/firebaseConfig/FirebaseConfig'
import { toast } from 'react-toastify'


const MyState = (props) => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState([]);

  const [userDetails, setUserDetails] = useState([]);

  const [addProduct,setAddProduct]=useState({
    productName:null,
    productPrice:null,
    productImage:null,
    category:null,
    description:null,
    productId:Date.now(),
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",
      {
        month:"short",
        day:"2-digit",
        year:"numeric"
      }
    )
  })

  const productAddBtn=async()=>{
  
    try {
      if(addProduct.productName===null|| addProduct.productImage===null|| addProduct.productPrice===null|| addProduct.description===null|| addProduct.category===null){
        return toast.error("fields can not be empty !!")
      }else{
        setLoading(true)
        const productRef=collection(fireDB,"products");

        const productAdd=await addDoc(productRef,addProduct);
        console.log(productAdd.id)
        setAddProduct("");
        getProductData();
        toast.success("Successfully Added");
        setLoading(false)
        setTimeout(()=>window.location.href="/admin",2000)
      }
      
    } catch (error) {
      toast.error(`Error Occured: ${error} !!`)
    }
  
  }


  const editHandle = (item) => {
    console.log("this is edit item: "+item)
    setAddProduct(item);
    console.log("this is after setting item: "+addProduct)
  }

  const updateProduct = async () => {
    try {
      console.log(addProduct)
      console.log(addProduct.id)
      console.log(addProduct.productId)
      setLoading(true)
      await setDoc(doc(fireDB, "products", addProduct.id), addProduct);
      setLoading(false)
      toast.success("SuccessFully updated");
      getProductData();
      setTimeout(() => window.location.href = "/admin");
    } catch (error) {
      toast.error("error while updating !!"+error)
    }
  }

  const deleteProduct=async(item)=>{
    try {
      await deleteDoc(doc(fireDB,"products",item.id));
      toast.success("product deleted");
      getProductData();
    } catch (error) {
      toast.error(error)
    }

  }

  const registeredUserInformation = async () => {
    try {
      setLoading(true)
      const userDataQueryRef = query(collection(fireDB, "users"), orderBy('time'));

      const data = onSnapshot(userDataQueryRef, (QuerySnapshot) => {
        let userArray = [];
        QuerySnapshot.forEach((doc) => {
          userArray.push({ ...doc.data(), id: doc.id })
        })
        setUserDetails(userArray)
      })
      setLoading(false)
      return () => data;



    } catch (error) {
      console.log(error)
    }
  }

  const getProductData = () => {
    try {
      setLoading(true)
      const dataQuery = query(collection(fireDB, "products"), orderBy('time'))

      const data = onSnapshot(dataQuery, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id })
        })
        setProduct(productArray);
      })
      setLoading(false)
      return () => data;
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProductData();
    registeredUserInformation();
  })
  return (
    <MyContext.Provider value={{ loading, setLoading, product,setProduct ,userDetails,editHandle,updateProduct,deleteProduct,addProduct,setAddProduct,productAddBtn }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState
