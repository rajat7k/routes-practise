import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProfilePage() {
    const navigate = useNavigate();

    function handleLogoutBtnClick() {
        localStorage.removeItem('token');
        navigate('/login/phone-number')
    }


    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <Link to='/' ><button >Go back</button></Link>
            <div className="btn-container">

                <Link to='/profile-details/app-details' > <button>App Details</button></Link>
                <br />
                <Link to='/profile-details/bank-details'> <button>Bank Details</button> </Link>
                <br />
                <Link to='/profile-details/subscription'> <button>Subscription</button> </Link>
                <br />
                <Link to='/profile-details/profile'> <button>Profile</button> </Link>
                <br />
                <button onClick={handleLogoutBtnClick} >Logout</button>
            </div>
        </div>
    )
}
