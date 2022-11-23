import './stylesheets/styles.css'

// Import Components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Aboutme from './components/aboutme';
import Worked from './components/worked';

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
  );
}

export default App;
