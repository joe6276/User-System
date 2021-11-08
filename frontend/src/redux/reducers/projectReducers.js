import { PROJECT, PROJECTS_GET, PROJECTS_GET_S,PROJECT_DELETE,P_UPDATE,STPROJECT} from "../types";

const initialState = {
    projects: [],
    project: {},
    loading: false,
    usersproject:[],
    cproject:{},
    error: "",
    message: ""
}

const projectReducer  = (state = initialState, action) => {
    switch (action.type) {

        case PROJECTS_GET.REQUEST:
            return { ...state, projectsLoading: true, projectsError: "", projects:[] }
        case PROJECTS_GET.SUCCESS:
            return { ...state, projectsLoading: false,projects: action.projects }
        case PROJECTS_GET.FAIL :
            return { ...state, projectsLoading: false, projectsError: action.error, projects: [] }


         case PROJECTS_GET_S.REQUEST:
                return { ...state, projectLoading: true, projectError: "",usersproject:[] }
         case PROJECTS_GET_S.SUCCESS:
                return { ...state, projectLoading: false,usersproject: action.usersp }
        case PROJECTS_GET_S.FAIL :
                return { ...state, projectLoading: false, projectError: action.error, usersproject: [] }

                
        case PROJECT_DELETE.REQUEST:
            return { ...state, projectLoading: true, projectError: "" }
        case PROJECT_DELETE.SUCCESS:
            return { ...state, projectLoading: false,projectError: ""}
        case PROJECT_DELETE.FAIL :
            return { ...state, projectLoading: false, projectError: action.error}

        case P_UPDATE.REQUEST:
            return { ...state, Loading: true, updateError: "" }
        case P_UPDATE.SUCCESS:
            return { ...state, Loading: false,message: action.message }
        case P_UPDATE.FAIL :
            return { ...state, Loading: false, updateError: action.error}



        case STPROJECT.REQUEST:
                return { ...state,  tasksError: "", cproject:{} }
        case STPROJECT.SUCCESS:
                return { ...state, cproject: action.cproject }
        case STPROJECT.FAIL :
                return { ...state,  tasksError: action.error, cproject: {} }

        default:
            return { ...state };


    }
}

export default projectReducer