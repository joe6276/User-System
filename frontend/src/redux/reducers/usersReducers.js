import { LOGIN, REGISTER, RESET_NOTIFICATION } from "../types";

const initialState = {
    user: {},
    loading: false,
    error: "",
    message: ""
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN.REQUEST:
            return { ...state, loading: true, error: "", user: {}, message: "" }
        case LOGIN.SUCCESS:
            return { ...state, loading: false, error: "", user: action.user }
        case LOGIN.FAIL:
            return { ...state, loading: false, error: action.error, user: {}, message: "" }

        case REGISTER.REQUEST:
            return { ...state, loading: true, error: "", message: "" }
        case REGISTER.SUCCESS:
            return { ...state, loading: false, error: "", message: action.message }
        case REGISTER.FAIL:
            return { ...state, loading: false, error: action.error, message: "" }
        case RESET_NOTIFICATION:
            return {...state, message: ""}

        default:
            return { ...state };
    }
}

export default usersReducer;