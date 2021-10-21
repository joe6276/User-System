import { LOGIN, REGISTER, RESET_NOTIFICATION, USERS_GET,AUSERS_GET } from "../types";

const initialState = {
    users:[],
    ausers:[],
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

        case USERS_GET.REQUEST:
            return { ...state, usersLoading: true, usersError: "", users:[] }
        case USERS_GET.SUCCESS:
            return { ...state, usersLoading: false,users: action.users }
        case USERS_GET.FAIL :
            return { ...state, usersLoading: false, usersError: action.error, users: [] }

            
        case AUSERS_GET.REQUEST:
            return { ...state, ausersLoading: true, ausersError: "", ausers:[] }
        case AUSERS_GET.SUCCESS:
            return { ...state, ausersLoading: false,ausers: action.ausers }
        case AUSERS_GET.FAIL :
            return { ...state, ausersLoading: false, ausersError: action.error, ausers: [] }


            
        default:
            return { ...state };
    }
}

export default usersReducer;