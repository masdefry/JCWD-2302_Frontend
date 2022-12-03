import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState, useRef } from "react"

export default function DetailProduct(){
    const productId = useParams()
    const selectSize = useRef()
    const selectTopping = useRef()
    const selectSugar = useRef()
    const selected = useRef()
    const [data, setData] = useState(null)
    const [sizeToShow, setSizeToShow] = useState(0)

    let onGetData = async() => {
        try {
            let response = await axios.get(`http://localhost:5000/products/${productId.id}`)
            console.log(response)
            setData(response.data)
        } catch (error) {
            
        }
    }

    let onSelectSize = () => {
        let indexSelectedSize = selectSize.current.value
        console.log(indexSelectedSize)
        setSizeToShow(indexSelectedSize)

    }

    let onAddOrder = async() => {
        try {
            let dataToSend = {
                idProduct: data.id,
                indexSize: parseInt(selectSize.current.value),
                indexTopping: parseInt(selectTopping.current.value),
                indexSugar: parseInt(selectSugar.current.value),
                quantity: 1,
                userId: parseInt(localStorage.getItem('token'))
            }
            let checkExist = await axios.get(`http://localhost:5000/cart?idProduct=${data.id}`)

            if(checkExist.data.length === 0){
                let response = await axios.post('http://localhost:5000/cart', dataToSend)
            }else{
                let newQuantity = checkExist.data[0].quantity + 1
                let update = await axios.patch(`http://localhost:5000/cart/${checkExist.data[0].id}`, {quantity: newQuantity})
                console.log(update)
            }   
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
                        {data.size[sizeToShow].calories} Calories
                    </h1>
                    <h1 className="basis-3/5 my-fs-25 mt-2">
                        Rp. {(data.size[sizeToShow].price).toLocaleString()}
                    </h1>
                </div>
            </div>
            <div className="flex mt-10">
                <div className="basis-1/3 px-24">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                        Size Options
                    </h1>
                    <select ref={selectSize} onClick={onSelectSize} className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            data.size.map((value, index) => {
                                return(
                                    <option key={index} value={index}>{value.option}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="basis-2/5">
                    <h1 className="my-fs-25 font-bold pb-2" style={{ borderBottom: '3px solid silver' }}>
                            Topping
                    </h1>
                    <select ref={selectTopping} className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {data.topping.map((value, index) => {
                            return(
                                <option value={index}>{value}</option>
                            )
                        })}
                    </select>

                    {
                        data.sugar?
                        <>
                            <h1 className="my-fs-25 font-bold pb-2 mt-3" style={{ borderBottom: '3px solid silver' }}>
                                Sugar
                            </h1>
                            <select ref={selectSugar} className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {data.sugar.map((value, index) => {
                                    return(
                                        <option value={index}>{value}</option>
                                    )
                                })}
                            </select>
                        </>
                    :
                        null
                    }
                </div>
            </div>
            <div className="flex justify-end px-24">
                <button onClick={onAddOrder} className="my-bg-main my-light px-3 py-3 rounded-full">
                    Add to order
                </button>
            </div>
        </div>
    )
}