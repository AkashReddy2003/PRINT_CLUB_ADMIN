import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Homepage from './Homepage';
import AuthPage from './AuthPage';

export default function MainPage() {
  const {auth}=useContext(AuthContext);
  return (
    <>
    {auth?<Homepage/>:<AuthPage/>}
    </>
  )
}
