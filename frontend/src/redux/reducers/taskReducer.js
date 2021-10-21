import {TASK_GET,TASK,RESET_NOTIFICATION } from "../types";

const initialState = {
    tasks: [],
    task: {},
    loading: false,
    error: "",
    message: ""
}

const taskReducer  = (state = initialState, action) => {
    switch (action.type) {
        case TASK_GET.REQUEST:
            return { ...state, TasksLoading: true, tasksError: "", tasks:[] }
        case TASK_GET.SUCCESS:
            return { ...state, TasksLoading: false,tasks: action.tasks }
        case TASK_GET.FAIL :
            return { ...state, TasksLoading: false, projectsError: action.error, tasks: [] }

        case TASK.REQUEST:
            return { ...state, loading: true, error: "", message: "" }
        case TASK.SUCCESS:
            return { ...state, loading: false, error: "", message: action.message }
        case TASK.FAIL:
            return { ...state, loading: false, error: action.error, message: "" }
        case RESET_NOTIFICATION:
            return {...state, message: ""}


        default:
            return { ...state };


    }
}

export default taskReducer