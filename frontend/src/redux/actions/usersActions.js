import axios from "axios"
import { LOGIN, REGISTER, RESET_NOTIFICATION,USERS_GET,AUSERS_GET } from "../types"


const loginRequest = () => ({
    type: LOGIN.REQUEST
})
export const loginUserAction = (user) => async dispatch => {
  
    dispatch(loginRequest())

    try {
        await axios.post("http://localhost:8000/users/signin", user)
        dispatch(
            {
                type: LOGIN.SUCCESS,
                message: "User Registered Successfully"   
            }
        )
        console.log('juiujui');
    } catch (error) {
        console.log({ error });
        dispatch({
            type: LOGIN.FAIL,
            error: "an error occured"
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
export const getUsers = ()=>async dispatch =>{
    dispatch({
        type: USERS_GET.REQUEST
    })

    try {
        const {data} = await axios.get("http://localhost:8000/users")
        
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

export const getAssignedUsers = ()=>async dispatch =>{
    dispatch({
        type: AUSERS_GET.REQUEST
    })

    try {
        const {data} = await axios.get("http://localhost:8000/users/assigned")
        
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