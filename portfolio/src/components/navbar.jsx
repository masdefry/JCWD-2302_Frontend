import React from 'react';
import { Link } from 'react-router-dom';

import Jumbotron from './../components/jumbotron';
import Aboutme from './../components/aboutme';
import Worked from './../components/worked';


class Navbar extends React.Component{
    render(){
        return(
            <>
                <div style={{position: 'fixed', backgroundColor: 'red', width: '100%'}}>
                <div className="navbar">
                    <div>
                        Logo
                    </div>
                    <div className="right-menu">
                        <div>
                            {/* <Link to='/aboutme'>
                                01.About
                            </Link> */}
                            <a href='#aboutme'>
                                01.About
                            </a>
                        </div>
                        <div>
                            02.Experience
                        </div>
                        <div>
                            <Link to='/worked'>
                            03.Work
                            </Link>
                        </div>
                        <div>
                            04.Contact
                        </div>
                        <div id="btn">
                            <button id="btn-real">
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar