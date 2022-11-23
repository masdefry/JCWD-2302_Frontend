import './stylesheets/styles.css'

// Import Components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Aboutme from './components/aboutme';
import Worked from './components/worked';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Section1: Navbar */}
      <Navbar />

      {/* Section2: Jumbotron */}
      <Jumbotron />

      {/* Section3: About Me */}
      <Aboutme />

      {/* Section4: Worked */}
      <Worked />
    </div>
    // <>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Jumbotron />} />
    //     <Route path='/aboutme' element={<Aboutme />} />
    //     <Route path='/worked' element={<Worked />} />
    //   </Routes>
    // </>
  );
}

export default App;
