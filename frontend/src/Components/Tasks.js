import React from 'react'
import {Link} from 'react-router-dom'

const Tasks = () => {
    return (
        <div>
         
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <Link to="/" className="navbar-brand  py-2 ml-5"> Project<span style={{color:'red'}}>Manager</span> </Link> 
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
    
<div>
  <table class="table table-stripedtable mt-5" style={{ marginLeft:'200px', width:'1000px'}}> 
  <thead>
      <tr>
  <th scope="col">#</th>
 <th> Task Description</th>
      <th scope="col"> Project</th>
      <th scope="col">Created At </th>
      <th scope="col">Email </th>
      <th scope="col">Actions </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Add nav</td>
      <td>Chally</td>
      <td>20/09/2021</td>
      <td>joan@gmail.com</td>
      <td>
            
            <button type="button" class="btn btn-success mx-2"><i className="fas  fa-edit "></i></button>
            <button type="button" class="btn btn-danger mx-2"><i className="far fa-trash-alt"></i></button>
            </td>
    </tr>
    <tr>
    <th scope="row">1</th>
      <td>Add Btn</td>
      <td>Chally</td>
      <td>20/09/2021</td>
      <td>joe@gmail.com</td>
      <td>
       
            <button type="button" class="btn btn-success mx-2"><i className="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger mx-2"><i className="fas fa-trash-alt"></i></button>
            </td>
    </tr>
  </tbody>
</table>
        </div>

        </div>
    )
}

export default Tasks
