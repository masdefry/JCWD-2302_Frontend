import { useRouter } from 'next/router'

export default function Profile(){
    const router = useRouter() 
    const {id} = router.query
    return(
        <div>
            <h1>
                Profile Page
            </h1>
            <h5>
                Ini Profile Id: {id}
            </h5>
        </div>
    )
}