import axios from 'axios';

export const FetchApi = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch({
                type: 'GET_DATA_SUCCESS',
                payload: response.data // [{}]
            })
        } catch (error) {
            dispatch({
                type: 'GET_DATA_ERROR',
                payload: error.message // 'Network Error'
            })
        }
    }
}