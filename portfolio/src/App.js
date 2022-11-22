import './stylesheets/styles.css'

// Import Components
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Aboutme from './components/aboutme';
import Worked from './components/worked';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([
    { year: '2020-2022', company: 'Purwadhika' },
    { year: '2022-Pensiun', company: 'Telkomsel' }
  ])

  const [idx, setIdx] = useState([0])

  let getData = (idx) => {
    setIdx(idx)
  }

  return (
    <div>
      {/* Section1: Navbar */}
      <Navbar />

      {/* Section2: Jumbotron */}
      <Jumbotron />

      {/* Section3: About Me */}
      <Aboutme />

      {/* Section4: Worked */}
      {/* <Worked /> */}
      <div className="worked">
        <div className="title">
            <h1>
                02. Where Ive Worked
            </h1>
            <div className="line">
            
            </div>
        </div>
        <div className="sidebar">
            <div >
                Menu-1 
            </div>
            <div onClick={() => getData(1)}>
                Menu-2
            </div>
            <div>
                Menu-3
            </div>
            <div>
                Menu-4
            </div>
            <div>
                Menu-5
            </div>
        </div>
        <div className="description">
            {
             <div>
             <p className="title">
                 {data[idx].company}
             </p>
             <p className="desc">
               {data[idx].year}
             </p>
           </div>
            }
        </div>
    </div>
    </div>
  );
}

export default App;
