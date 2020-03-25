import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'

// export const getlogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         })
//     }
// }

export const getlogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }        
}


export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};