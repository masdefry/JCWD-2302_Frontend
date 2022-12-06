import {useRef} from 'react'

import axios from 'axios'

import { Navigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

export default function Login(props){

    const username = useRef()
    const password = useRef()

    if(props.isRedirect.redirect){
        return <Navigate to='/' />
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="flex justify-center mt-16 font-bold text-2xl ">
                Sign in or create an account
            </h1>

                

            <div className="cards mt-10 px-20 py-10 w-2/5 rounded-md flex flex-column">
                <p className='font-bold'>
                * indicates required field
                </p>
                <h1 className='my-fs-20 mt-5 mb-3 font-bold'>
                    Personal Information
                </h1>
                <input ref={username} type='text' placeholder='Input you username' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid grey'}} />
                <input ref={password} type='text' placeholder='Input you password' className='py-2 px-2 w-100 rounded-md mt-3' style={{border: '1px solid grey'}} />
                <p className="my-main underline hover:no-underline font-bold self-start mt-3">
                    Forgot your username?
                </p>
                <p className="my-main underline hover:no-underline font-bold self-start mt-1">
                    Forgot your password?
                </p>
                <button onClick={() => props.myFunc.onLogin(username.current.value, password.current.value)} className='my-bg-main my-light px-4  py-3 mt-3 rounded-full self-end'>
                    Login
                </button>
                <button onClick={props.myFunc1.onLoginWithGoogle} className='my-bg-main my-light px-4  py-3 mt-3 rounded-full self-end'>
                    Login with Google
                </button>
            </div>
        </div>

    )
}