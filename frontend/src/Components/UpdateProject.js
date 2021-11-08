import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router'
import { getProjects, specificProject, updateProject } from '../redux/actions/projectActions'
import { addTask, specificTask,updateTask } from '../redux/actions/taskActions'
import { getAssignedUsers, getUsers } from '../redux/actions/usersActions'
const UpdateProject = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history=useHistory()
  
    
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getAssignedUsers())
  },[])
    
    const { tasks,ctask, TasksLoading, tasksError } = useSelector(state => state.tasks)
    const { projects,cproject, projectsLoading, projectsError } = useSelector(state => state.projects)
    const { users,ausers, usersLoading, usersError } = useSelector(state => state.users)


    const [project, setProject] = useState({
        projectname: "",
        projectduration: "",
        email: "",
       
    });

    useEffect(() => {
        dispatch(specificProject(id))
    }, [dispatch, id])

    

    useEffect(() => {
        if(cproject.length > 0){
            let t= cproject[0];
            setProject(prev=> ({...prev, projectname: t.projectname ,email:t.email, projectduration: t.projectduration
                
                
            }));
             
        }
    }, [cproject])

    let y= cproject[0];
   


    // useEffect(() => {
    //     if(!projects){
    //         dispatch(getProjects())
    //     }
    // }, [projects, dispatch])


    
    // useEffect(() => {
    //     if(!ausers){
    //         dispatch(getAssignedUsers())
    //     }
    // }, [ausers, dispatch])
    
   
    // useEffect(() => {
    //     if(!users){
    //         dispatch(getUsers())
    //     }
    // }, [users, dispatch])

    // console.log(users)


    

    
    
    
    const handleupdateProject = () => {
       
        if(!project.projectname || !project.projectduration || !project.email){
            return toast.error('Please Fill in all Fields..')
        }
        
        dispatch(updateProject(id,project))
        toast.success('Task Successfully Added ')
        history.push('/viewp')
        
    }

    const onInputChange = e => {
        setProject(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/home" className="navbar-brand  py-2 ml-5"> Project<span style={{ color: 'red' }}>Manager</span> </Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link to="/viewp" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> View Projects</Link>
                            <Link to="/viewt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> View Tasks </Link>
                            <Link to="/addp" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Projects</Link>
                            <Link to="/addt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Task</Link>
                            <Link to="/users" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Users </Link>

                        </div>
                    </div>
                </nav>


                <div style={{ width: '500px', marginTop: '20px', backgroundColor: 'white', marginLeft: '500px' }}>
                    <h1 style={{ marginLeft: '100px' }}> Update Project</h1>
                    <div class="mb-3 mt-4">
                        <label for="formGroupExampleInput" class="form-label">Project Name</label>
                        <input type="text" class="form-control"
                            name="projectname"
                            value={project.projectname.trim()}
                            onChange={onInputChange}
                            id="formGroupExampleInput"
                            placeholder="Enter update" />
                    </div>
                    <div class="mb-3 mt-4">
                        <label for="formGroupExampleInput" class="form-label">Project Duration</label>
                        <input type="text" class="form-control"
                            name="projectduration"
                            value={project.projectduration.trim()}
                            onChange={onInputChange}
                            id="formGroupExampleInput"
                            placeholder="Enter update" />
                    </div>


                    
                    <div class="mb-3 mt-4">

                    <select 
                        onChange={onInputChange} 
                        value={project.email.trim()}
                        name="email" 
                        class="form-control" 
                        id="" >
                            <option value="">Select User </option>
                            <option  value={cproject[0]?.email}>{cproject[0]?.email}</option>
                            {users?.map((user) => (
                                <option key={user.id} value={user.email}>{user.email}</option>

                            ))}
                           
                        </select>
                        </div>
                    <button type="submit" onClick={handleupdateProject} class="btn btn-primary">Update Project</button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProject
