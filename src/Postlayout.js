import React from "react";
import { Link, Outlet } from "react-router-dom";

const Postlayout=()=>{
    return(
        <>
       <Link to={'/Postpage/1'}>Post1</Link><br></br>
        <Link to={'/Postpage/2'}>Post2</Link><br></br>
        <Link to={'/Postpage/3'}>Post3</Link><br/>
        <Link to={'/Postpage/Newpost'}>New post</Link>
        <Outlet/>
       </>
    )
}

export default Postlayout;