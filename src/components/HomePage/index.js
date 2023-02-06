import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="home-page">

            <h1>Home Page</h1>

            <div className="buttons-container">
                <Link to='/profile-details' > <button >Profile</button></Link>
                <br />
                <Link to='/profile-update'> <button> Update Profile</button>  </Link>

            </div>
        </div>
    )
}
