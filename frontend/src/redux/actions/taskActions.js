
import axios from "axios";
import { TASK_GET,TASK,TASK_GETS,UPDATE,TASK_DELETE,SPTASK,T_UPDATE} from "../types"



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

export const updateTasks = (taskid, email)=> async dispatch => {
    dispatch({
        type:UPDATE.REQUEST})
    try {
         await axios.put(`http://localhost:5001/tasks/${taskid}/done`)
       
        dispatch({
            type:UPDATE.SUCCESS,
            Message:"Task Updated SucessFully "
        })
        dispatch(getUserTask(email))

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:UPDATE.FAIL,
            error:"An error occured"
        })

    }
}


export const updateTask = (taskid, task)=> async dispatch => {
    dispatch({
        type:T_UPDATE.REQUEST})
    try {
         await axios.put(`http://localhost:5001/tasks/${taskid}`, task)
       
        dispatch({
            type:T_UPDATE.SUCCESS,
            Message:"Task Updated SucessFully "
        })
       dispatch(getTasks())

    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:T_UPDATE.FAIL,
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
export const specificTask= (taskid)=> async dispatch => {
    dispatch({
        type:SPTASK.REQUEST})
    try {
        const { data }= await axios.get(`http://localhost:5001/tasks/${taskid}/task`)
    

        dispatch({
            type:SPTASK.SUCCESS,
            ctask: data
           
        })
        dispatch(getTasks())
    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:SPTASK.FAIL,
            error:"An error occured"
        })

    }
}
    
   

export const deleteTask = (taskid)=> async dispatch => {
    dispatch({
        type:TASK_DELETE.REQUEST})
    try {
        await axios.delete(`http://localhost:5001/tasks/${taskid}`)
        dispatch({
            type:TASK_DELETE.SUCCESS,
            message:"Task Deleted Successfully"
           
        })
        dispatch(getTasks())
    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:TASK_DELETE.FAIL,
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

