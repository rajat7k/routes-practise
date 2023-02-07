
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function LoginPage(props) {

    const navigate = useNavigate()
    const {state}=useLocation()
    // const {data}=state;

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    function handleUserNameInput(event) {
        setUserName(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value);
    }

    function handleLoginBtnClick() {
        localStorage.setItem('token', 'success');
        if(state!=null){
            navigate(state);
        }
        else
            navigate('/');
    }
    


    return (
        <div className="login-page">
            <p className="login-heading">
                Welcome Back , Please Login
            </p>
            <div className="login-container">
                <label htmlFor="userName"> UserName </label>
                <input onChange={handleUserNameInput} type="text" value={username} name='userName' />
                <br />
                <label htmlFor="password">Password</label>
                <input onChange={handlePasswordInput} type="password" value={password} name='password' />
                <br />
                <button onClick={handleLoginBtnClick} >Login</button>
            </div>
        </div>
    )
}
