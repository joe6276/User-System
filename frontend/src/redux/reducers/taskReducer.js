import {TASK_GET } from "../types";

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
            return { ...state, TasksLoading: true, projectsError: "", tasks:[] }
        case TASK_GET.SUCCESS:
            return { ...state, TasksLoading: false,projects: action.tasks }
        case TASK_GET.FAIL :
            return { ...state, TasksLoading: false, projectsError: action.error, tasks: [] }

        default:
            return { ...state };


    }
}

export default taskReducer