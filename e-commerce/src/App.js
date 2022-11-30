// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/navbar";
import Register from "./pages/register/register";
import Login from './pages/login/login'
import Home from './pages/home/home'
import Menu from './pages/menu/menu';
import { useEffect, useState } from 'react';

import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';


export default function App(){

  const [username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    checkIsLogin()
  }, [])

  let checkIsLogin = async() => {
    try {
      let getTokenId = localStorage.getItem('token')
      if(getTokenId){
        let response = await axios.get(`http://localhost:5000/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
      }
    } catch (error) {
      
    }
  }

  let onLogin = async(inputUsername, inputPassword) => {
      try {
          // Step0. Get Value Input
          // Step1. Check is Username & Password exist?
          let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`)
          if(response.data.length === 0) throw { message: 'Account not found' } // If data not found, throw error
          localStorage.setItem('token', `${response.data[0].id}`)
          setUsername(response.data[0].username)
          toast('Login Success.');
          setTimeout(() => {
            setRedirect(true)
          }, 3000)
      } catch (error) {
          toast(error.message);
      }
  }

  return(
    <>
      <Navbar data={{username}} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login'  element={<Login myFunc={{onLogin}} isRedirect={{redirect}} />} />
          <Route path='/menu'  element={<Menu />} />
        </Routes>
      <Toaster />
    </>
  )
}
