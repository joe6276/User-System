import {Link} from'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProjectaction } from '../redux/actions/projectActions'

const AddProject = () => {

    const { loading, error, message } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [project, setProject] = useState({
        projectname: "",
        projectduration: "",
        email: "",
       
    });
    const handleAddProject = () => {
        dispatch(addProjectaction(project))
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
         
            </div>
        </div>
</nav>


            <div style={{ width:'500px', marginTop:'20px', backgroundColor:'white' ,margin:'auto'}}>
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
                <input type="text" class="form-control" 
                name="email"
                value={project.email}
                onChange={onInputChange}

                id="formGroupExampleInput" placeholder="Enter email"/>
                </div>
                
                <button type="submit"  onClick={handleAddProject} class="btn btn-primary">Add Project</button>
        </div>
        </div>
    )
}

export default AddProject
