import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Navbar from './components/navbar';
import Home from './pages/home/home';
import { useEffect, useState } from 'react';

function App() {
	const [keepLogin, setKeepLogin] = useState(false)

	let checkIsLogin = () => {
		let token = localStorage.getItem('token')

		if(token) setKeepLogin(true)
	}

	useEffect(() => {
		checkIsLogin()
	}, [])

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Login myState={keepLogin} />} /> 
				<Route path='/register' element={<Register />} />
				<Route path='/home' element={<Home myFunc={{checkIsLogin}} myState={keepLogin} />} />
			</Routes>
		</>
	);
}

export default App;
