export const INITIAL_STATE = {
    title: '',
    price: 0,
    desc: '',
    caterogy: '',
    tags: [],
    quantity: 0,
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            };
        case "ADD_TAG":
            return {};
        case "REMOVE_TAG":
            return {};
        case "INCREMENT":
            return {
                ...state,
                quantity: state.quantity + 1
            };
        case "DECREMENT":
            return {
                ...state,
                quantity: state.quantity - 1 
            };
        default:
            return state;
    }
}