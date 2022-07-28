const inicialState = {
    historial: [],

}

function rootReducer(state = inicialState, action) {

    switch (action.type) {
        case "GET_REVERSE_STRING":
            return {
                ...state,
                historial: [...state.historial, action.payload],
            }
        case "GET_ERROR":
            return {
                ...state,
            }

        default:
            return state;
    }
}
export default rootReducer;
