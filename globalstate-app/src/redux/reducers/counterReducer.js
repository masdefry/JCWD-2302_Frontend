let initialState = {
    number: 0, 
    username: ''
    // errorMessage: ''
}

function CounterReducer(state = initialState, action){
    // state = {number: 0}
    switch(action.type){
        case 'INCREMENT': 
            return {...state, number: state.number + 1}
        case 'DECREMENT':
            return {...state, number: state.number - 1}
        // case 'ERROR':
        //     return {...state, errorMessage: 'Error Lurd!'}
        case 'Signin':
            return {...state, username: action.payload.username}
        default: 
            return state 
    }
}

export default CounterReducer