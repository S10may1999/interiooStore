import React from "react";
import NavBar from "../navbar/NavBar";
import ProductCard from "../productcard/ProductCard";
import PageRoute from "../pageroute/PageRoute";

const Layout=({children})=>{
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Layout