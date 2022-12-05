import { useRef } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login(props){
	const email = useRef()
	const password = useRef()

	const [isLogin, setIsLogin] = useState(false)

	const onLogin = async() => {
		try {
			// Step1. Ambil value inputan
			let inputEmail = email.current.value 
			let inputPassword = password.current.value 

			// Step2. 
			let response = await axios.get(`http://localhost:5000/users?email=${inputEmail}&password=${inputPassword}`)
			if(response.data.length === 0) throw { message: 'Login Failed' }
			localStorage.setItem('token', response.data[0].id)
			setIsLogin(true)
			if(response.data.length === 1) alert('Login Success')
		} catch (error) {
			alert(error.message)
		}
	}
	if(isLogin || props.myState) return <Navigate to='/home' />
    return(
        <div className="container max-w-lg">
			<form>
				<div class="mb-6">
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
					<input ref={email} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
				</div>
				<div class="mb-6">
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
					<input ref={password} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
				</div>
				<div class="flex items-start mb-6">
					<div class="flex items-center h-5">
					<input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
					</div>
					<label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
				</div>
				<button onClick={onLogin} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
			</form>
		</div>
    )
}