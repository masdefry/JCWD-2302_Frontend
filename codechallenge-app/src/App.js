import Register from "./pages/register";
import Activation from "./pages/activation";
import Post from "./pages/post";

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/activate' element={<Activation />} />
        <Route path='/post' element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
