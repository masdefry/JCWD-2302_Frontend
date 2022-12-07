import Link from "next/link";
import axios from 'axios';

export default function Home(props){
    return(
        <div>
            <h1>
                Home Pages
            </h1>
            <Link href='/profile/profile?id=1'>
                Go to Profile
            </Link>

            <Link href='/'>
                Go to Landing Page
            </Link>
            {
                props.dataProducts.map((value, index) => {
                    return(
                        <div>{value.username}</div>
                    )
                })
            }
        </div>
    )
}

export const getServerSideProps = async() => {
    try {
       
        let res = await axios.get('http://localhost:5000/users')
        console.log(res.data)

        return{
            props: {
                dataProducts: res.data
            }
        }
    } catch (error) {
        console.log(error)
    }
}