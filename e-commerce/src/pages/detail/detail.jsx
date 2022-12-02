import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function DetailProduct(){
    const productId = useParams()
    const [data, setData] = useState(null)

    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/products/${productId.id}`)
            setData(response.data)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if(data === null){
        return(
            <div>
                Loading...
            </div>
        )
    }

    return(
        <div>
            <div>

            </div>
            <div className="flex items-center my-bg-main" style={{ height: '300px' }}>
                <div className="basis-2/5 flex justify-center">
                    <img src={data.image} className='rounded-full' style={{width: '200px', height: '200px'}} />
                </div>
                <div className="basis-3/5 my-light">
                    <h1 className="my-fs-30 font-bold ">
                        {data.name}
                    </h1>
                    <h1 className="basis-3/5 my-fs-25 mt-2">
                        {data.size[0].calories} Calories
                    </h1>
                    <h1 className="basis-3/5 my-fs-25 mt-2">
                        Rp. {(data.size[0].price).toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-1/3 px-24">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Size Options
                    </h1>
                    <select id="countries" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a size</option>
                        {
                            data.size.map((value, index) => {
                                return(
                                    <option value={value.option}>{value.option}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="basis-2/5">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                            Topping
                    </h1>
                    <select id="countries" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a size</option>
                        {data.topping.map((value, index) => {
                            return(
                                <option value={value}>{value}</option>
                            )
                        })}
                    </select>

                    <h1 className="my-fs-25 font-bold pb-2 mt-3" style={{ borderBottom: '3px solid silver' }}>
                        Sugar
                    </h1>
                    <select id="countries" className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a size</option>
                        {data.sugar.map((value, index) => {
                            return(
                                <option value={value}>{value}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}