import { Link } from "react-router-dom";

export default function Profile(){
    return(
        <>
            <h1>
                Profile Pages 
            </h1>
            <h5>
                <Link to='/'>
                    Go to Home
                </Link>
            </h5>
        </>
    )
}