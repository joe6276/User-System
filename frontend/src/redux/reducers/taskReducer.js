import {TASK_GET,TASK_GETS,TASK,RESET_NOTIFICATION } from "../types";

const initialState = {
    tasks: [],
    task: {},
    loading: false,
    usertask:[],
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
            return { ...state, TasksLoading: false, taskssError: action.error, tasks: [] }

        case TASK_GETS.REQUEST:
            return { ...state, TaskLoading: true, tasksError: "", usertasks:[] }
        case TASK_GETS.SUCCESS:
            return { ...state, TaskLoading: false,usertasks: action.usertasks }
        case TASK_GETS.FAIL :
            return { ...state, TaskLoading: false, tasksError: action.error, usertasks: [] }

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