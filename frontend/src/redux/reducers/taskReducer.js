import {TASK_GET,TASK_GETS,TASK,RESET_NOTIFICATION, UPDATE,TASK_DELETE,SPTASK,T_UPDATE} from "../types";

const initialState = {
    tasks: [],
    task: {},
    loading: false,
    usertask:[],
    ctask:{},
    error: "",
    message: "",
    delmessage:""
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

        case SPTASK.REQUEST:
                return { ...state,  tasksError: "", ctask:{} }
        case SPTASK.SUCCESS:
                return { ...state, ctask: action.ctask }
        case SPTASK.FAIL :
                return { ...state,  tasksError: action.error, ctask: {} }



        case UPDATE.REQUEST:
            return { ...state, uTaskLoading: true, utasksError: "" }
        case UPDATE.SUCCESS:
            return { ...state, uTaskLoading: false,message: action.message }
        case UPDATE.FAIL :
            return { ...state, uTaskLoading: false, utasksError: action.error}

        case T_UPDATE.REQUEST:
            return { ...state, uTaskLoading: true, utasksError: "" }
        case T_UPDATE.SUCCESS:
            return { ...state, uTaskLoading: false,message: action.message }
        case T_UPDATE.FAIL :
                return { ...state, uTaskLoading: false, utasksError: action.error}

        case TASK.REQUEST:
            return { ...state, loading: true, error: "", message: "" }
        case TASK.SUCCESS:
            return { ...state, loading: false, error: "", message: action.message }
        case TASK.FAIL:
            return { ...state, loading: false, error: action.error, message: "" }

        case TASK_DELETE.REQUEST:
            return { ...state, loading: true, deleteerror: ""}
        case TASK_DELETE.SUCCESS:
            return { ...state, loading: false, deleteerror: "", delmessage: action.message }
        case TASK_DELETE.FAIL:
            return { ...state, loading: false, deleteerror: action.error, delmessage: "" }


        case RESET_NOTIFICATION:
            return {...state, message: ""}


        default:
            return { ...state };


    }
}

export default taskReducer