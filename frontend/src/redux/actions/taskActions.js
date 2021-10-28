
import axios from "axios";
import { TASK_GET,TASK,TASK_GETS,UPDATE } from "../types"



export const getTasks = ()=> async dispatch => {
    dispatch({
        type:TASK_GET.REQUEST})
    try {
        const { data } = await axios.get("http://localhost:5001/tasks")
        console.log({data});
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

export const updateTasks = (taskid)=> async dispatch => {
    dispatch({
        type:UPDATE.REQUEST})
    try {
        const { data } = await axios.put(`http://localhost:5001/tasks/${taskid}`)
        console.log({data});
       
        dispatch({
            type:UPDATE.SUCCESS,
            Message:"Task Updated SucessFully "
        })

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:UPDATE.FAIL,
            error:"An error occured"
        })

    }
}

export const getUserTask = (email)=> async dispatch => {
    dispatch({
        type:TASK_GETS.REQUEST})
    try {
        const { data } = await axios.get(`http://localhost:5001/tasks/${email}`)
        dispatch({
            type:TASK_GETS.SUCCESS,
            usertasks:data
        })

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:TASK_GETS.FAIL,
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

