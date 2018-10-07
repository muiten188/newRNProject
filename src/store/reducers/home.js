const initialState = {
    counter: 0
}
export const home = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}
