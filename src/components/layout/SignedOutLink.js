import React from 'react'
import {NavLink} from 'react-router-dom'


const SignedOutLink = () =>{
    return(
        <ul className = "right">
            <li><NavLink to = '/signup'>Sign Up</NavLink></li>
            <li><NavLink to = '/signin'>LogIn</NavLink></li>
            
        </ul>
    )
}

export default SignedOutLink 