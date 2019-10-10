import React from 'react'

import {Redirect} from 'react-router-dom'

const Root = ({isLoggedIn}) => {
    if(isLoggedIn){
        return <Redirect to="/home" />
    }
    else{
        return <Redirect to="/login" />
    }
}

export default Root
