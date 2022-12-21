// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from "./components/navbar";
import Register from "./pages/register/register";
import Login from './pages/login/login'
import Home from './pages/home/home'
import Menu from './pages/menu/menu';
import DetailProduct from './pages/detail/detail';
import Cart from './pages/cart/cart';
import { useEffect, useState } from 'react';

import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';

// Import Firebase
import {auth} from './firebase';
import {
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged, 
signOut} from 'firebase/auth'

  const provider = new GoogleAuthProvider();

export default function App(){

  const [username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    console.log('Appjs Jalan')
    checkIsLogin()
    checkTokenUid()
  }, [])

  let checkIsLogin = async() => {
    try {
      let getTokenId = localStorage.getItem('token')
      if(getTokenId){
        let response = await axios.get(`http://localhost:5000/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
      }
    } catch (error) {
      
    }
  }

  let onLogin = async(inputUsername, inputPassword) => {
      try {
          let response = await axios.post(`http://localhost:5004/users/login`, {username: inputUsername, password: inputPassword})
      
          localStorage.setItem('token', `${response.data.data.id}`)
          setUsername(response.data.data.username)
          toast(response.data.message);
          setTimeout(() => {
            setRedirect(true)
          }, 3000)
      } catch (error) {
          toast(error.response.data.message);
      }
  }

  let onLogout =() => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenUid')
    signOut(auth)
    setRedirect(false)
    setUsername('')
  }

  let onLoginWithGoogle = async() => {
    try {
      let response = await signInWithPopup(auth, provider)
      setUsername(response.user.email)
      setRedirect(true)
      localStorage.setItem('tokenUid', response.user.uid)
    } catch (error) {
      
    }
  }

  let checkTokenUid = () =>{
    if(localStorage.getItem('tokenUid')){
      onAuthStateChanged(auth, (userFromFirebase) => {
        console.log('RUnning')
        if(userFromFirebase){
          setUsername(userFromFirebase.email)
        }
      });
    }else{
      onLogoutFirebase()
    }
  }

  let onLogoutFirebase = async() => {
    try {
      await signOut(auth)
      setUsername('')
    } catch (error) {
      
    }
  }

  return(
    <>
      <Navbar data={{username}} myFunc={{onLogout}} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register isRedirect={{redirect}} />} />
          <Route path='/login'  element={<Login myFunc={{onLogin}} myFunc1={{onLoginWithGoogle}} isRedirect={{redirect}} />} />
          <Route path='/menu'  element={<Menu />} />
          <Route path='/product/:id'  element={<DetailProduct />} />
          <Route path='/cart'  element={<Cart />} />
        </Routes>
      <Toaster />
    </>
  )
}
