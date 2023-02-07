import React from 'react'
import {  useNavigate } from 'react-router-dom'
import LinkWithQuery from '../LinkWithQuery';

export default function ProfilePage() {
    const navigate = useNavigate();

    function handleLogoutBtnClick() {
        localStorage.removeItem('token');
        navigate('/login/phone-number')
    }


    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <LinkWithQuery to='/' ><button >Go back</button></LinkWithQuery>
            <div className="btn-container">

                <LinkWithQuery to='/profile-details/app-details' > <button>App Details</button></LinkWithQuery>
                <br />
                <LinkWithQuery to='/profile-details/bank-details'> <button>Bank Details</button> </LinkWithQuery>
                <br />
                <LinkWithQuery to='/profile-details/subscription'> <button>Subscription</button> </LinkWithQuery>
                <br />
                <LinkWithQuery to='/profile-details/profile'> <button>Profile</button> </LinkWithQuery>
                <br />
                <button onClick={handleLogoutBtnClick} >Logout</button>
            </div>
        </div>
    )
}
