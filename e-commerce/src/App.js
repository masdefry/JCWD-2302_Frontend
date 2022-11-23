import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Profile from './pages/profile/profile';
import Home from './pages/home/home';

class App extends React.Component{
  render(){
    return(
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </>
    )
  }
}

export default App;
