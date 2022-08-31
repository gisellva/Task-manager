import React from 'react'
import Navigator from '../Navigator/Navigator'

const Layout = ({children}) => {
    return(
        <>
            <Navigator/>
            {children}
        </>
    )
}

export default Layout
