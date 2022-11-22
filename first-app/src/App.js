import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import NotFound from './pages/notfound/notfound';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;

// React Fragment
