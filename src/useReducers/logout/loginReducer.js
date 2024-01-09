export const INITIAL_STATE = {
    username: '',
    password: '',
    error: false,
    loggedIn: false,
}

export const loginReducer = (state, action) => {
    switch (action.type) {
        case "INPUT_CHANGE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "HANDLE_SUBMIT":
            return {
                ...state,
                loggedIn: true,
                error: false,
                username: '',
                password: '',

            }
            case "ERROR":
            return {
                ...state,
                error: "ERROR LOGIN",
            }
            case "LOGOUT":
                return{
                    ...state,
                    error: false,
                    loggedIn:false
                }
                default :{
                    return state
                }
    }
}