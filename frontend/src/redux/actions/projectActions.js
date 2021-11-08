import axios from "axios"
import { PROJECT, PROJECTS_GET ,PROJECTS_GET_S,PROJECT_DELETE,P_UPDATE,STPROJECT} from "../types"

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
            error
        })

    }
}

export const updateProject = (projectid,project)=>async dispatch =>{
    dispatch({
        type: P_UPDATE.REQUEST
    })

    try {
       await axios.put(`http://localhost:5001/projects/${projectid}`,project)
        dispatch({
            type: P_UPDATE.SUCCESS,
            message:"Project Updated Successfully "
        })
        dispatch(getProjects())
    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: P_UPDATE.FAIL,
            error: "an error occured"
        })

    }
}

export const specificProject= (projectid)=> async dispatch => {
    dispatch({
        type:STPROJECT.REQUEST})
    try {
        const { data }= await axios.get(`http://localhost:5001/projects/${projectid}/done`)
        console.log(data)
    

        dispatch({
            type:STPROJECT.SUCCESS,
            cproject: data
           
        })
        dispatch(getProjects())
    } catch (error) {
        console.log({ error });
        dispatch({
            
            type:STPROJECT.FAIL,
            error:"An error occured"
        })

    }
}


export const getUserProject = (email)=>async dispatch =>{
    dispatch({
        type: PROJECTS_GET_S.REQUEST
    })

    try {
        const {data} = await axios.get(`http://localhost:5001/projects/${email}`)
        dispatch({
            type: PROJECTS_GET_S.SUCCESS,
            usersp: data[0]
        })

    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: PROJECTS_GET_S.FAIL,
            error: "an error occured"
        })

    }
}
export const deleteProject = (projectid)=>async dispatch =>{
    dispatch({
        type: PROJECT_DELETE.REQUEST
    })

    dispatch(getProjects())

    try {
        await axios.delete(`http://localhost:5001/projects/${projectid}`)
        dispatch({
            type: PROJECT_DELETE.SUCCESS,
            
        })
       dispatch(getProjects())
    } 
    catch (error) {
        console.log({ error });
        dispatch({
            type: PROJECT_DELETE.FAIL,
            error: "an error occured"
        })

    }
}