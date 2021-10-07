import React from 'react'
import {Link} from 'react-router-dom'
const AddTask = () => {
    return (
        <div>
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


            <div style={{ width:'500px', marginTop:'20px', backgroundColor:'white' ,marginLeft:'500px'}}>
            <h1 style={{marginLeft:'100px'}}> Add a New Task </h1>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Task Description</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Task Description "/>
                </div>

            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Project</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Project name "/>
                </div>
                <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Created at </label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter date "/>
                </div>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label"> Asigned to </label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter email"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Add Project</button>
        </div>
        </div>
        </div>
    )
}

export default AddTask
