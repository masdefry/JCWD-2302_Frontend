import { Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";

const Form = lazy(() => (import('./../component/form')))

export default function Home(){
    const[isOpenForm, setIsOpenForm] = useState(false)

    let onOpenForm = () => {
        setIsOpenForm(!isOpenForm)
    }

    return(
        <>
            <h1>
                Home Pages 
            </h1>
            <button onClick={onOpenForm}>
                Edit Form 
            </button>
            {
                isOpenForm?
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Form />
                    </Suspense>
                :
                    null
            }
            <h5>
                <Link to='/profile'>
                    Go to Profile
                </Link>
            </h5>
        </>
    )
}