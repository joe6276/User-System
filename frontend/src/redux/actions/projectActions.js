import axios from "axios"
import { PROJECT, PROJECTS_GET } from "../types"

export const addProjectaction = (project) => async dispatch => {
    dispatch({
        type: PROJECT.REQUEST
    })

    try {
        await axios.post("http://localhost:5001/projects", project)
        dispatch({
            type: PROJECT.SUCCESS,
            message: "Project  Registered Successfully"
        })

    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: PROJECT.FAIL,
            error: "an error occured"
        })

    }
}

export const getProjects = ()=>async dispatch =>{
    dispatch({
        type: PROJECTS_GET.REQUEST
    })

    try {
        const {data} = await axios.get("http://localhost:5001/projects")
        dispatch({
            type: PROJECTS_GET.SUCCESS,
            projects: data
        })

    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: PROJECTS_GET.FAIL,
            error: "an error occured"
        })

    }
}