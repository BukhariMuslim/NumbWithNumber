
const NumberReducer = (state = '', action) => {
    switch (action.type) {
        case 'Number':
            return action.data
        default:
            return state
    }
}

export default NumberReducer