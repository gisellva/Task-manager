import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'
import routes from "../herpser/rotes"

const PrivateRoute = ({hasRole:rol,...props}) => {
    const location=useLocation()
   // console.log(location)
    const {hasRol,islogged}=UseAuth();

    if( rol && !hasRol(rol))return <Redirect to="/Homepage"/>
    if(!islogged)return <Redirect to={{pathname:routes.Loginpage}} />
   
    return(
        <Route {...props}/>
    )
}

export default PrivateRoute
