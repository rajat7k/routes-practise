import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
    if (localStorage.getItem('token') === 'success') {
        if (window.location.pathname === '/login/phone-number') {
            return <Navigate to='/' />
        }
        else return props.children
    }
    else {
        console.log(props.path)
        return <Navigate to='/login/phone-number' state={props.path} />
    }

}
