import React from 'react'
import { Link, useNavigate} from 'react-router-dom';

export default function SubcriptionComponent() {
  const navigate = useNavigate();

  function handleLogoutBtnClick() {
    localStorage.removeItem('token');
    navigate('/login/phone-number')
  }


  return (
    <div>
      <h1>Subcription Page</h1>
      <Link to='/profile-details' >
            <button >Go back</button>
            </Link>
            <br />
      <button onClick={handleLogoutBtnClick} >Logout</button>
    </div>
  )
}

