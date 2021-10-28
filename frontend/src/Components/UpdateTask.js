import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useHistory, useParams } from 'react-router'
import { getProjects } from '../redux/actions/projectActions'
import { addTask, specificTask,updateTask } from '../redux/actions/taskActions'
import { getAssignedUsers, getUsers } from '../redux/actions/usersActions'
const AddTask = () => {
    const {id} = useParams()
    
  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getAssignedUsers())
  },[])
    
    const { tasks,ctask, TasksLoading, tasksError } = useSelector(state => state.tasks)
    const { projects, projectsLoading, projectsError } = useSelector(state => state.projects)
    const { users,ausers, usersLoading, usersError } = useSelector(state => state.users)
        // const [projects, setProjects] = useState([])
    const dispatch = useDispatch()
    const history=useHistory()

    const [task, setTask] = useState({
        taskdescription: "",
        project: "",
        email: "",
    });

    useEffect(() => {
        dispatch(specificTask(id))
    }, [dispatch, id])

    useEffect(() => {
        if(ctask.length > 0){
            let t= ctask[0];
            setTask(prev=> ({...prev, taskdescription: t.taskdescription}));
        }
    }, [ctask])

    let t= ctask[0];

    useEffect(() => {
        if(!projects){
            dispatch(getProjects())
        }
    }, [projects, dispatch])


    
    useEffect(() => {
        if(!ausers){
            dispatch(getAssignedUsers())
        }
    }, [ausers, dispatch])
    
   
    useEffect(() => {
        if(!users){
            dispatch(getUsers())
        }
    }, [users, dispatch])

    console.log(users)


    

    
    
    
    const handleupdateTask = () => {
       
        if(!task.taskdescription || !task.project || !task.email){
            return toast.error('Please Fill in all Fields..')
        }
        
        dispatch(updateTask(id,task))
        toast.success('Task Successfully Added ')
        history.push('/viewt')
        console.log(task)
    }

    const onInputChange = e => {
        setTask(prev => ({ ...prev, [e.target.name]: e.target.value }))
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
                    <h1 style={{ marginLeft: '100px' }}> Update  Task </h1>
                    <div class="mb-3 mt-4">
                        <label for="formGroupExampleInput" class="form-label">Task Description</label>
                        <input type="text" class="form-control"
                            name="taskdescription"
                            value={task.taskdescription}
                            onChange={onInputChange}
                            id="formGroupExampleInput"
                            placeholder="Enter update" />
                    </div>

                    <div class="mb-3 mt-4">
                        <label for="formGroupExampleInput" class="form-label">Project</label>
                        <select 
                        onChange={onInputChange} 
                        value={task.project}
                        name="project" 
                        class="form-control" 
                        id="" >
                            <option value="">Select Project </option>
                            <>
                                {projects?.map((project) => (
                                    <option key={project.projectid} value={project.projectname}>{project.projectname}</option>

                                ))}
                            </>
                        </select>
                    </div>

                    <div class="mb-3 mt-4">

                    <select 
                        onChange={onInputChange} 
                        value={task.email}
                        name="email" 
                        class="form-control" 
                        id="" >
                    <option value="">Select User </option>
                            <>
                                {users?.map((user) => (
                                    <option key={user.id} value={user.email}>{user.email}</option>

                                ))}
                                
                                {ausers?.map((user) => (
                                    <option key={user.id} value={user.email}>{user.email}</option>

                                ))}

                        
                            </>
                        </select>
                        </div>
                    <button type="submit" onClick={handleupdateTask} class="btn btn-primary">Update Task</button>
                </div>
            </div>
        </div>
    )
}

export default AddTask
