import { combineReducers } from 'redux'

import CounterReducer from './counterReducer'

const allReducer = combineReducers({
    counter: CounterReducer
})

export default allReducer