const initialState = {
    zulaMessageText: '',
    isZulaMessageContainerVisible: false,
    isZulaAccessible: true
}


const ZulaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ZulaReducer_Text': {
            state = { ...state, zulaMessageText: action.payload, isZulaMessageContainerVisible: true }
            break;
        }
        case 'ZulaReducer_Sleep': {
            state = { ...state, zulaMessageText: '', isZulaMessageContainerVisible: false }
            break;
        }
        case 'ZulaReducer_Access': {
            state = { ...state, isZulaAccessible: action.payload }
            break;
        }
    }
    return state;
}

export default ZulaReducer;