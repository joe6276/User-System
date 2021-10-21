
import axios from "axios";
import { TASK_GET,TASK } from "../types"





export const getTasks = ()=> async dispatch => {
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
export const addTask = (task) => async dispatch => {
    dispatch({
        type: TASK.REQUEST
    })

    try {
        await axios.post("http://localhost:5001/tasks", task)
        dispatch({
            type: TASK.SUCCESS,
            message: "Task  Registered Successfully"
        })

    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: TASK.FAIL,
            error: "an error occured"
        })

    }
}

