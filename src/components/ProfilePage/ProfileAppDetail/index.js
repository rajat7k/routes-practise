import React from 'react'
import { useNavigate} from 'react-router-dom';
import LinkWithQuery from '../../LinkWithQuery';

export default function ProfileAppDetail() {
  const navigate = useNavigate();

  function handleLogoutBtnClick() {
    localStorage.removeItem('token');
    navigate('/login/phone-number')
  }


  return (
    <div>
      <h1>Profile  App Details</h1>
      <LinkWithQuery to='/profile-details' >
            <button >Go back</button>
            </LinkWithQuery>
            <br />
      <button onClick={handleLogoutBtnClick} >Logout</button>
    </div>
  )
}

