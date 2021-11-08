import {Link} from'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { addProjectaction } from '../redux/actions/projectActions'
import { getAssignedUsers, getUsers } from '../redux/actions/usersActions'
import { toast } from 'react-toastify';


const AddProject = () => {

    const history= useHistory()

    const dispatch1 = useDispatch()

    useEffect(() => {
       dispatch1(getUsers())
      
    }, [])



    const { ausers, users ,loading, error, message } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [project, setProject] = useState({
        projectname: "",
        projectduration: "",
        email: "",
       
    });
    const handleAddProject = () => {
      //console.log(project)
      if(!project.projectname || !project.projectduration || !project.email){
        return toast.error('Please Fill in all Fields..')
    }
        const p = {
            projectname: project.projectname.trim(),
        projectduration: project.projectduration.trim(),
        email: project.email.trim()
        }
        dispatch(addProjectaction(p))
        toast.success('Project Successfully Added ')
        history.push('/viewp')
       
    }

    const onInputChange = e => {
        setProject(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <Link to="/home" className="navbar-brand  py-2 ml-5"> Project<span style={{color:'red'}}>Manager</span> </Link> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link to="/viewp" className="navbar-brand  py-2  ml-5 mr-5" style={{marginLeft:'200px'}}> View Projects</Link> 
            <Link to="/viewt" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> View Tasks </Link> 
            <Link to="/addp" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Add Projects</Link> 
            <Link to="/addt" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Add Task</Link> 
            <Link to="/users" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Users </Link> 
         
            </div>
        </div>
</nav>

            <div className="d-flex justify-between">            
                
            <div style={{ width:'500px', marginTop:'20px', margin:'auto', backgroundColor:'white'}}>
            <h1 style={{marginLeft:'100px'}}> Add a New Project </h1>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Project Name</label>
                <input type="text" class="form-control"
                name="projectname"
                value={project.projectname}
                onChange={onInputChange}
                id="formGroupExampleInput" placeholder="Enter project name "/>
                </div>

            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Project Duration</label>
                <input type="text" class="form-control" 
                name="projectduration"
                value={project.projectduration}
                onChange={onInputChange}
                id="formGroupExampleInput" placeholder="Enter project duration "/>
                </div>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Email</label>
                {/* <input type="text" class="form-control" 
                name="email"
                value={project.email}
                onChange={onInputChange}

                id="formGroupExampleInput" placeholder="Enter email"/> */}

                    <select 
                        onChange={onInputChange} 
                        value={project.email}
                        name="email" 
                        class="form-control" 
                        id="" >
                    <option value="">Select User </option>
                    <>
                    {users.map((user) => (
                    <option key={user.id} value={user.email}>{user.email}</option>
                    ))}
                    
                    </>
                        </select>
                </div>
                
                <button type="submit"  onClick={handleAddProject} class="btn btn-primary">Add Project</button>


        </div>
        <div style={{margin:'auto', border:'2px solid red', padding:'15px'}}>
            <h1>Unassigned Students</h1>

            <>
            {users.map((user) => (
              <li> {user.email}</li>

            ))}
           
            </>
        </div>
        </div>
       
 
        </div>
    )
}

export default AddProject
