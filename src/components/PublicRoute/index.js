import React from 'react'
import { Navigate } from 'react-router-dom'

export default function PublicRoute(props) {
    if (localStorage.getItem('token') === 'success') {
        return <Navigate to='/' />
    }
    else {
        // return props.children
        return props.children
    }
}
