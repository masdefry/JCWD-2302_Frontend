import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
export default function Home(props){

    const [error, setError] = useState('')
    const [data, setData] = useState([])

    const text = useRef()

    let onTweet = async() => {
        try {
            // Step1. Ambil inputan from textarea
            let inputText = text.current.value

            // Step2. Validasi (maximum char 160)
            if(inputText.length >= 10) throw { message: 'Kelebihan woi!' }

            // Step3. Simpan datanya
            let response = await axios.post('http://localhost:5000/tweet', {tweet: inputText, userId: parseInt(localStorage.getItem('token'))})
            text.current.value = ''
            setError('')
            alert('Tweet Success!')
            onGetData()
        } catch (error) {
            setError(error.message)
        }
    }

    let onGetData = async() => {
        try {
            let response = await axios.get('http://localhost:5000/tweet')
            let getUsers = await axios.get('http://localhost:5000/users')

            let newData = []
            response = response.data 
            getUsers = getUsers.data    
            for(let i=0; i < response.length; i++){
                console.log(response[i])
                for(let j=0; j < getUsers.length; j++){
                    if(response[i].userId === getUsers[j].id){
                        response[i].username = getUsers[j].email
                        newData.push(response[i])
                        break;
                    }
                     
                }
            }

            // response.forEach(value => {
            //     getUsers.forEach(val => {
            //         if(value.userId === val.id){
            //             value.username = val.email 
            //             newData.push(value)
            //         }
            //     })
            // })

            setData(newData)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        props.myFunc.checkIsLogin()
        onGetData()
    }, [])

    if(props.myState === false) return <Navigate to='/' />

    return(
        <div className="container max-w-lg">
           
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
            <textarea ref={text} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
            <button onClick={onTweet} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tweet</button>
            <span style={{ color: 'red' }}>
                {error}
            </span>
            {
                data.map((value, index) => {
                    return(
                        <div key={index}>
                            <span className='font-bold mr-3'>
                                {value.username}
                            </span>{value.tweet}
                        </div>
                    )
                })
            }
        </div>
    )
}