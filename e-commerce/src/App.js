// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Register from "./pages/register/register";

export default function App(){
  return(
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}
