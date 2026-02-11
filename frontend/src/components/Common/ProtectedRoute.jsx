import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children, role }) => {

  const { user } = useSelector((state) => state.auth)

  // If not logged in
  if (!user) {
    return <Navigate to="/login" replace />
  }

  // If role is required and doesn't match
  if (role && user.role !== role) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
