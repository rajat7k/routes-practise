import React from 'react'
import {  useNavigate } from 'react-router-dom'
import LinkWithQuery from '../LinkWithQuery';

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
                <LinkWithQuery to='/profile-details' > <button >Profile</button></LinkWithQuery>

                <br />
                <LinkWithQuery to='/profile-update'> <button> Update Profile</button>  </LinkWithQuery>
                <br/>
                <button onClick={handleLogoutBtnClick} >Logout</button>
            </div>
        </div>
    )
}
