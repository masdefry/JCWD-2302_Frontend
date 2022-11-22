import React from 'react';

import List from '../../components/list';

import './home.css'

import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 className='home-h1' style={{ color: 'blue', backgroundColor: 'red' }}>
                    Students Lists 
                </h1>
                <ul>
                    <List data={{ name: 'Stephen', umur: 17 }} />
                    <List data={{ name: 'Mutia', umur: 15 }} />
                </ul>
                <h1>
                    <Link to='/profile'>
                        Menuju ke Profile
                    </Link>
                </h1>
            </div>
        )
    }
}

export default Home