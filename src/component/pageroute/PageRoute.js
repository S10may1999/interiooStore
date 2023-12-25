import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage'
import AdminHomePage from '../../pages/admin/home/AdminHomePage';
import LoginPage from '../../pages/userCredentials/LoginPage/LoginPage';
import RegisterPage from '../../pages/userCredentials/RegisterPage/RegisterPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartPage from '../../pages/cart/CartPage'
import { toast } from 'react-toastify';
import ProductAdd from '../../pages/admin/productAddAndUpdate/productAdd/ProductAdd';
import MyState from '../../context/MyState';
import ProductUpdate from '../../pages/admin/productAddAndUpdate/productUpdate/ProductUpdate';


const PageRoute = () => {
    return (
        <MyState>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/admin' element={<ViewCheckForAdmin><AdminHomePage /></ViewCheckForAdmin>}></Route>
                    <Route path='/login' element={<LoginPage />}></Route>
                    <Route path='/register' element={<RegisterPage />}></Route>
                    <Route path='/cart' element={<CartRouteSecurity><CartPage /></CartRouteSecurity>}></Route>
                    <Route path='/admin/product-add' element={<ViewCheckForAdmin><ProductAdd /></ViewCheckForAdmin>}></Route>
                    <Route path='/admin/product-update' element={<ViewCheckForAdmin><ProductUpdate /></ViewCheckForAdmin>}></Route>
                </Routes>
                <ToastContainer />
            </Router>
        </MyState>
    )
}



const ViewCheckForAdmin = ({ children }) => {

    try {
        const userLoginInformationData = JSON.parse(window.localStorage.getItem("user"))
        if (userLoginInformationData.email == "admin@interioo.com") {
            return children;
        } else {
            window.location.href = "/login"
        }
    } catch (error) {
        toast.error("Kindly login as Admin")
        setTimeout(() => window.location.href = "/", 800)
    }
}

const CartRouteSecurity = ({ children }) => {
    const userLoginInformationData = JSON.parse(window.localStorage.getItem("user"))
    if (userLoginInformationData) {
        return children;
    }
    else {
        toast.error("Please kindly login to check Cart !!")
        window.location.href = "/login"
    }
}

export default PageRoute