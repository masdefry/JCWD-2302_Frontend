import './stylesheets/styles.css'

// Import Components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';

function App() {
  return (
    <div>
      {/* Section1: Navbar */}
      <Navbar />

      {/* Section2: Jumbotron */}
      <Jumbotron />

      {/* Section3: About Me */}
      <div class="about-me">
        <div class="title">
            <h1>
                01. About Me
            </h1>
            <div class="line">
               
            </div>
        </div>
        <div>
            <p>
                Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!

Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.

I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
        </div>
        <div>
            <img src="./Assets/3248158939.jpg" width="250px" height="250px" style="margin-top: 20px;" />
        </div>
      </div>
    </div>
  );
}

export default App;
