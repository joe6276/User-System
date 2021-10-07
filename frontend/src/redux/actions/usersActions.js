import axios from "axios"
import { LOGIN, REGISTER, RESET_NOTIFICATION } from "../types"

const loginRequest = () => ({
    type: LOGIN.REQUEST
})

const loginSuccess = (user) => ({
    type: LOGIN.SUCCESS,
    user
})

const loginFail = (error) => ({
    type: LOGIN.FAIL,
    error
})


export const loginUserAction = (user) => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post("http://localhost:5001/users/login", user)


    } catch (error) {
        console.log({ error });
        dispatch(loginFail(error.response.data.message))

    }
}

export const registerUserAction = (user) => async dispatch => {
    dispatch({
        type: REGISTER.REQUEST
    })
    try {
        await axios.post("http://localhost:5001/users/signup", user)
        dispatch({
            type: REGISTER.SUCCESS,
            message: "User Registered Successfully"
        })

    } catch (error) {
        console.log({ error });
        dispatch({
            type: REGISTER.FAIL,
            error: "an error occured"
        })

    }
}

export const resetNotification = () => dispatch => {
    dispatch({
        type: RESET_NOTIFICATION
    })
}