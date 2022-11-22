import React from 'react';

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <div>
                    Logo
                </div>
                <div className="right-menu">
                    <div>
                        01.About
                    </div>
                    <div>
                        02.Experience
                    </div>
                    <div>
                        03.Work
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
        )
    }
}

export default Navbar