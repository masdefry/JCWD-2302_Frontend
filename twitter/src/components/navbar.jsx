import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div style={{ backgroundColor: 'grey', heigth: '50px' }}>
            <span>
                <Link to='/'>
                    Login 
                </Link>
            </span>
            <span className="ml-5">
                <Link to='/register'>
                    Register 
                </Link>
            </span>
        </div>
    )
}