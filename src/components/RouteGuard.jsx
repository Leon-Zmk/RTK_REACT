import React from 'react'
import {  Navigate, useLocation, useNavigate } from 'react-router-dom'

function RouteGuard({children}) {
    const location=useLocation();
    if(location.state !== null){
        return children;
    }
    else{
        return <Navigate to={"/"} />
    }

}

export default RouteGuard