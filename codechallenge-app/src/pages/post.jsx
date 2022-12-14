import {useEffect, useRef} from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function Post(){
    let text = useRef()
    let image = useRef()

    const [data, setData] = useState([])
    const [page, setPage] = useState([])
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(10)

    let onPost = async() => {
        try {
            await axios.post('http://localhost:5000/post', {
                text: text.current.value, 
                url: image.current.value,
                usersId: parseInt(localStorage.getItem('token'))
            })
            alert('Post Success!')
            getPost()
        } catch (error) {
            
        }
    }

    let getPost = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/post?_start=${start-1}&_end=${end-1}`)
            let response1 = await axios.get(`http://localhost:5000/post`)

            let totalPages = Math.ceil(response1.data.length/10)
            var newPage = [] // [1, 2]
            for(let i=1; i <= totalPages; i++){
                newPage.push(i)
            }
            console.log(newPage)
            setPage(newPage)

            setData(response.data.reverse())
        } catch (error) {
            
        }
    }

    let onNext = (start, end) => {
        console.log(start)
        console.log(end)
    }

    useEffect(() => {
        getPost()
    }, [])

    return(
        <div>
            <input ref={text} type='text' placeholder='Enter your text' />
            <input ref={image} type='text' placeholder='Enter your image url' />
            <button onClick={onPost}>
                Submit
            </button>

            <div>
                {data.map((value, index) => {
                    return(
                        <div key={index}>
                            {value.text}
                        </div>
                    )
                })}
            </div>
            <div>
                {
                    page.map((value) => {
                        return(
                            <button onClick={() => onNext((value+'0')-10, (value+'0')-1)}>
                                {value}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}