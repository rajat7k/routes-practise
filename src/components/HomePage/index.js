import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {

    const navigate=useNavigate();

    function handleLogoutBtnClick(){
        localStorage.removeItem('token');
        navigate('/login/phone-number')
    }

    return (
        <div className="home-page">

            <h1>Home Page</h1>

            <div className="buttons-container">
                <Link to='/profile-details' > <button >Profile</button></Link>
                <br />
                <Link to='/profile-update'> <button> Update Profile</button>  </Link>
                <br/>
                <button onClick={handleLogoutBtnClick} >Logout</button>
            </div>
        </div>
    )
}
