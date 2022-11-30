import { combineReducers } from 'redux'

import CounterReducer from './counterReducer'
import DataReducer from './dataReducer';

const allReducer = combineReducers({
    counter: CounterReducer,
    dataReducer: DataReducer
})

export default allReducer