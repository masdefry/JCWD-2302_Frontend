import { useEffect, useState, useRef } from "react"
import axios from "axios"

export default function Activation(){

    let code = useRef()

    const[uniqueCode, setUniqueCode] = useState(0)

    useEffect(() => {
        generateCode()
    }, [])
    
    let generateCode = () => {
        setUniqueCode(Math.round(Math.random() * 99999))
    }

    let onActivate = async() => {
        try {
            if(parseInt(code.current.value) !== uniqueCode) throw { message: 'Code nya salah' }

            await axios.patch(`http://localhost:5000/users/${parseInt(localStorage.getItem('token'))}`, {status: true})
            alert('Your account active!')
        } catch (error) {
            alert(error.message)
            generateCode()
        }
    }
    
    return(
        <div>
            {uniqueCode}
            <input ref={code} type='text' placeholder='Enter your code' />
            <button onClick={onActivate}>
                Submit
            </button>
        </div>
    )
}