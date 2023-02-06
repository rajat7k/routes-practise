import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ProfilePage() {
    console.log()
    const navigate = useNavigate()

    function handleBackBtnClick() {
        navigate(-1);
    }

    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <button onClick={handleBackBtnClick} >Go back</button>
            <div className="btn-container">

                <Link to='/profile-details/app-details' > <button>App Details</button></Link>
                <br />
                <Link to='/profile-details/bank-details'> <button>Bank Details</button> </Link>
            </div>
        </div>
    )
}
