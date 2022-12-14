import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Register(){
    let username = useRef()
    let password = useRef()
    let redirect = useNavigate()
    
    let onRegister = async() => {
       try {
        let inputUsername = username.current.value 
        let inputPassword = password.current.value 

        let dataToSend = {
            username: inputUsername,
            password: inputPassword,
            status: false
        }

        await axios.post('http://localhost:5000/users', dataToSend)
        let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}`)
        localStorage.setItem('token', response.data[0].id)
        alert('Register Success')
        redirect('/activate')
       } catch (error) {
        
       }
    }
    return(
        <div>
            <input ref={username} type='text' placeholder='Enter your username' />
            <input ref={password} type='text' placeholder='Enter your password' />
            <button onClick={onRegister}>
                Submit
            </button>
        </div>
    )
}