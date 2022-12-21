import './register.css'

import {useRef, useState} from 'react';

import axios from 'axios';

import toast, { Toaster } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export default function Register(props){
    const [disabledButton, setDisabledButton] = useState(false)
    const [message, setMessage] = useState('')

    const username = useRef()
    const email = useRef()
    const password = useRef()

    let onSubmit = async() => {
        try {
            // Step.1 Get Input Value from Input
            let inputUsername = username.current.value 
            let inputEmail = email.current.value 
            let inputPassword = password.current.value 

            // Step2. Validate Input Value
            if(inputUsername.length === 0 || inputPassword.length === 0 || inputEmail.length === 0) throw { message: 'Inputan belum lengkap' }
            
            if(inputPassword.length < 8) throw { message: 'Password invalid' }

            let character = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
            if(!character.test(inputPassword)) throw { message: 'Password must contains number' }

            setDisabledButton(true)
            let result = await axios.post(`http://localhost:5004/users/register`, {username: inputUsername, email: inputEmail, password: inputPassword})
            toast(result.data.message);
        } catch (error) {
            console.log(error)
            setMessage(error.response.data.message)
        }finally{
            setDisabledButton(false)
        }
        
    }

    if(props.isRedirect.redirect){
        return <Navigate to='/' />
    }

    return(
        <div  className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Create an account
            </h1>
            <h1 className="my-fs-15 my-grey mt-5 font-bold">
                PURWADHIKA® REWARDS
            </h1>
            <p className="my-grey mt-3" style={{maxWidth: '600px', textAlign: 'center'}}>
                Join Purwadhika Rewards to earn Stars for free food and drinks, any way you pay. Get access to mobile ordering, a birthday Reward, and moremore.
            </p>
            <div className="cards mt-20 px-20 py-10 w-2/5 rounded-md flex flex-column">
                <p className='font-bold'>
                * indicates required field
                </p>
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Personal Information
                </h1>
                <input ref={username} type='text' placeholder='Input you username' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid grey'}} />
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Account Security
                </h1>
                <input ref={email} type='text' placeholder='Input you email' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid grey'}} />
                <input ref={password} type='text' placeholder='Input you password' className='py-2 px-2 w-100 rounded-md mt-3' style={{border: '1px solid grey'}} />
                <div className='text-red-500'>
                    {message}
                </div>
                <button disabled={disabledButton} onClick={onSubmit} className='my-bg-main my-light px-3 py-3 mt-3 rounded-full self-end'>
                    Register
                </button>
            </div>
            <Toaster />
        </div>
    )
}
