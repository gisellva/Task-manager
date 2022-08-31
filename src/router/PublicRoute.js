import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import UseAuth from '../auth/UseAuth'

const PublicRoute = (props) => {
    const {islogged}=UseAuth();
    if(islogged())return <Redirect to="/Projectspages"/>
    return(
        <Route {...props}/>
    )
}

export default PublicRoute
