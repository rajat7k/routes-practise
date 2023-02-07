import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/ProfilePage';
import ProfileAppDetail from './components/ProfilePage/ProfileAppDetail';
import BankDetails from './components/ProfilePage/BankDetails';
import UpdateProfile from './components/UpdateProfile';
import SubcriptionComponent from './components/ProfilePage/Subscription';
import Profile from './components/ProfilePage/Profile';
import PublicRoute from './components/PublicRoute';
// import { useState } from 'react';

function App() {


  return (
    <Router>
    <Routes>

     <Route path='/' element={<ProtectedRoute path='/' ><HomePage/></ProtectedRoute>}  />

     <Route path='/login/phone-number'  element={ <PublicRoute><LoginPage/> </PublicRoute> } />

     <Route path='/profile-details' element={<ProtectedRoute path='/profile-details'> <ProfilePage/> </ProtectedRoute>} />

      <Route path='/profile-details/app-details' element={<ProtectedRoute path='/profile-details/app-details' > <ProfileAppDetail/> </ProtectedRoute>} />

      <Route path='/profile-details/bank-details' element={<ProtectedRoute path='/profile-details/bank-details' > <BankDetails/> </ProtectedRoute>} />

      <Route path='/profile-update' element={<ProtectedRoute path='/profile-update'><UpdateProfile/> </ProtectedRoute>} />


      <Route path='/profile-details/profile' element={<ProtectedRoute path='/profile-details/profile'><Profile/> </ProtectedRoute>} />


      <Route path='/profile-details/subscription' element={<ProtectedRoute path='/profile-details/subscription'><SubcriptionComponent/> </ProtectedRoute>} />

    </Routes>
  </Router>
  );
}

export default App;
