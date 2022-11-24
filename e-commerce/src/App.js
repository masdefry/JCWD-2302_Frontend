
import Navbar from "./components/navbar";

// Utilities
import './supports/stylesheets/utilities.css'

// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/register/register";

// import Profile from './pages/profile/profile';
// import Home from './pages/home/home';
// import Chakra from './pages/chakra/chakra';

// class App extends React.Component{
//   render(){
//     return(
//       <>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/profile' element={<Profile />} />
//           <Route path='/chakra' element={<Chakra />} />
//         </Routes>
//       </>
//     )
//   }
// }

// export default App;

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
