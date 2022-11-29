import { connect } from 'react-redux';

// Import action
import { SetIncrement, SetDecrement, SetData } from './../redux/actions/counterAction';

import {useRef} from 'react'

function Signin({counter, SetIncrement, SetDecrement, SetData}){
    const username = useRef()
    const password = useRef()

    let onSubmit = () => {
        let inputUsername = username.current.value // Untuk mendapatkan inputan username
        let inputPassword = password.current.value 
        
        SetData(inputUsername, inputPassword)
    }

    return(
        <>
            <input ref={username} type='text' placeholder='Enter you username' />
            <input ref={password} type='password' placeholder='Enter you password' />
            <button onClick={onSubmit}>
                Submit
            </button>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = {
    SetIncrement,
    SetDecrement, 
    SetData
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin)