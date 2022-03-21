import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'
const ProtectedRouter = ({isLogged}) => {
  return isLogged ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRouter