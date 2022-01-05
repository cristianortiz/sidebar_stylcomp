import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';
import Home from '../pages/Home';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';


const AppRouter = () => {
    const authFalse = false
    const authTrue = true
    return (
        <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoutes isAuthenticated={authFalse}>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/home/*"
          element={
            <PrivateRoutes isAuthenticated={authTrue}>
              <Home />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
    )
}

export default AppRouter
