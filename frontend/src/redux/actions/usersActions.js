import axios from "axios"

import { LOGIN, REGISTER, RESET_NOTIFICATION, USERS_GET, AUSERS_GET } from "../types"


const loginRequest = () => ({
    type: LOGIN.REQUEST
})

export const loginUserAction = (user) => async dispatch => {
    dispatch(loginRequest())
    try {
        const { data } = await axios.post("http://localhost:8000/users/signin", user)
        console.log({data});
        localStorage.setItem('token', data.token)
        dispatch(
            {
                type: LOGIN.SUCCESS,
                message: "User Logged Successfully",
                loguser: data
            }
        )
    } catch (error) {
        console.log({ error });
        dispatch({
            type: LOGIN.FAIL,
            error: " Make Sure your password and Email are Valid"
        })

    }
}

export const getLoggedInUser = (user) => async dispatch => {
    dispatch(loginRequest())
    let token = localStorage.getItem('token');
    try {
        const { data } = await axios.post("http://localhost:8000/users/auth/me", {
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
              },
        })

        dispatch(
            {
                type: LOGIN.SUCCESS,
                message: "User Logged Successfully",
                loguser: data
            }
        )
    } catch (error) {
        localStorage.removeItem('token');
        dispatch({
            type: LOGIN.FAIL,
            error: error.message || error
        })

    }
}

export const registerUserAction = (user) => async dispatch => {

    dispatch({
        type: REGISTER.REQUEST
    })
    try {
        await axios.post("http://localhost:8000/users/signup", user)
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
export const getUsers = () => async dispatch => {
    dispatch({
        type: USERS_GET.REQUEST
    })

    try {
        const { data } = await axios.get("http://localhost:8000/users")

        dispatch({
            type: USERS_GET.SUCCESS,
            users: data
        })



    }
    catch (error) {
        console.log({ error });
        dispatch({
            type: USERS_GET.FAIL,
            error: "an error occured"
        })

    }
}

export const getAssignedUsers = () => async dispatch => {
    dispatch({
        type: AUSERS_GET.REQUEST
    })

    try {
        const { data } = await axios.get("http://localhost:8000/users/assigned")

        dispatch({
            type: AUSERS_GET.SUCCESS,
            ausers: data
        })



    }
    catch (error) {
        console.log({ error });
        dispatch({
            type: AUSERS_GET.FAIL,
            error: "an error occured"
        })

    }
}

export const resetNotification = () => dispatch => {
    dispatch({
        type: RESET_NOTIFICATION
    })
}