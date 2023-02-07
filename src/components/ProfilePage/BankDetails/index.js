import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function BankDetails() {

    const navigate = useNavigate();

  function handleLogoutBtnClick() {
    localStorage.removeItem('token');
    navigate('/login/phone-number')
  }


 
    return (
        <div>
            <h1>Bank Details</h1>
            <Link to='/profile-details' >
            <button>Go back</button>
            </Link>
            <br />
      <button onClick={handleLogoutBtnClick} >Logout</button>
        </div>
    )
}
