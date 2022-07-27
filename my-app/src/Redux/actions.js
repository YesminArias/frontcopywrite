import axios from 'axios';

export function getText(text) {
    return async function (dispatch) {
        try {
            const result = await axios.get(`http://localhost:3001/?text=${text ? text : ''}`);
            console.log(result)
            return dispatch({

                type: 'GET_REVERSESTRING',
                payload: result.data,
            })
        } catch
        (err) {
            console.log(err)
            return dispatch({
                type: "GET_ERROR",
                payload: { "error": "no text" }
            })
        }
    }
}