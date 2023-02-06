// import  { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {

    // const navigate=useNavigate();

    // const [user,setUser]=useState(false);

    // function checkUser(){
    //     const userStatus=localStorage.getItem('token');
    //     console.log(userStatus);
    //     if(userStatus==='success'){
    //         console.log("working")
    //         setUser(true)
    //     }
    // }

    // useEffect(()=>{
    //     if(!user){
    //         checkUser();
    //     }

    // },[user])
    if (localStorage.getItem('token') === 'success') {
        if (window.location.pathname === '/login/phone-number') {
            <Navigate to='/' />
        }
        else return props.children
    }
    else {
        // return props.children
        console.log(props.path)
        // if (props.path) {
        //     return <Navigate to={props.path} />
        // }
        // else
        return <Navigate to='/login/phone-number' />
    }

}
