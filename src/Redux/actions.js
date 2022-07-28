import axios from 'axios';

export function getText(text) {
    return async function (dispatch) {
        try {
            const result = await axios.get(`https://app-palindrome.herokuapp.com/?text=${text ? text : ''}`);
            return dispatch({
                type: 'GET_REVERSE_STRING',
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