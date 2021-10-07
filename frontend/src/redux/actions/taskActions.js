
import axios from "axios";
import { TASK_GET } from "../types"





export const loginUserAction = (user) => async dispatch => {
    dispatch({
        type:TASK_GET.REQUEST})
    try {
        const { data } = await axios.get("http://localhost:5001/tasks")
        dispatch({
            type:TASK_GET.SUCCESS,
            tasks:data
        })

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:TASK_GET.FAIL,
            error:"An error occured"
        })

    }
}

// export const registerUserAction = (user) => async dispatch => {
//     dispatch({
//         type: REGISTER.REQUEST
//     })
//     try {
//         await axios.post("http://localhost:5001/users/signup", user)
//         dispatch({
//             type: REGISTER.SUCCESS,
//             message: "User Registered Successfully"
//         })

//     } catch (error) {
//         console.log({ error });
//         dispatch({
//             type: REGISTER.FAIL,
//             error: "an error occured"
//         })

//     }
// }

