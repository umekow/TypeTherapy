import React from 'react'
import Link from 'react-router-dom'

//component that contains summary for user profile such as username, link to account settings, and icon
const User = props => {
    return(
        <div className="user">
            <p className="username"> Welcome, {props.username} </p> 
            <Link to="/account">Your Account</Link>
        </div>
    )
}

export default User