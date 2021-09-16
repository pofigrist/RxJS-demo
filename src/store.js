export const counterReducer = (state = { value: 0}, action) => {
    switch (action.type) {
        case 'ADD':
            return { value: state.value + 1 }
        case 'SUB':
            return { value: state.value - 1 }
        default:
            return state
    }
}