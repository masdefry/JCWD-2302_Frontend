export const SetIncrement = () => {
    return{
        type: 'INCREMENT'
    }
}

export const SetDecrement = (number) => {
    console.log('Ini di Action Decrement y')
    console.log(number)
    return{
        type: 'DECREMENT'
    }
    // if(number > 0){
    //     return{
    //         type: 'DECREMENT'
    //     }
    // }else{
    //     return{
    //         type: 'ERROR'
    //     }
    // }
}

export const SetData = (username, password) => {
    return{
        type: 'Signin',
        payload: {username: username, password: password}
    }
}