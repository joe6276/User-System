import { PROJECT, PROJECTS_GET, PROJECTS_GET_S} from "../types";

const initialState = {
    projects: [],
    project: {},
    loading: false,
    usersproject:[],
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

        default:
            return { ...state };


    }
}

export default projectReducer