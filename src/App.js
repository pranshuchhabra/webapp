import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './component/Auth';
import "./assets/style/global.css"
import Layout from './component/staffdashboard/layout';
import '@mdi/font/css/materialdesignicons.min.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VendorLayout from './component/vendordashboard/vendorlayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }
   
  }, [user,navigate])

  console.log(user,"user")



  return (
    <div>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
          {
          user?.role === "Vendor" ? 
            <Route path="/*" element={<VendorLayout />}/>
          : 
          user?.role === "Staff"
          ?
          <Route path="/*" element={<Layout/>} /> 
          :
          <Route path="/login" element={<LoginScreen />} />
          }
         <Route
          path="*"
          element={<Navigate to={user ? '/' : '/login'} />}
         />
      </Routes>
    </div>
  )
}

export default App