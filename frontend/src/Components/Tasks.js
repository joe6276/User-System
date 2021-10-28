import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { deleteTask, getTasks,specificTask} from '../redux/actions/taskActions'
import UpdateTask from './UpdateTask'

const Tasks = () => {

  const { tasks,ctask, TasksLoading, tasksError } = useSelector(state => state.tasks)
  
  const dispatch = useDispatch()
console.log();
  console.log(tasks)


  useEffect(() => {
    dispatch(getTasks())
  }, [])

  const handleDelete=(taskid)=>{
    console.log(taskid)
    dispatch(deleteTask(taskid))

  }
  const handleupdates=(taskid)=>{
    console.log(taskid)

  }
  const handleTask =(taskid)=>{
  dispatch(specificTask(taskid))
  }
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
            <Link to="/users" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Users </Link> 
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
  {TasksLoading ? <h4>Loading..........</h4> :(
      <>
            {tasks?.map((task, idx) => (
              <tr key={task.projectid}>
                <th scope="row">{idx+1}</th>
                <td>{task.taskdescription}</td>
                <td>{task.project}</td>
                <td>{task.createdat}</td>
                <td>{task.email}</td>
                <td>
                  <button type="button" class="btn btn-success mx-2"><i className="fas  fa-edit "></i><Link to={`/updatetask/${task.taskid}`} style={{}}>Edit </Link> </button>
                  <button  onClick={()=>handleDelete(task.taskid)} type="button" class="btn btn-danger mx-2"><i className="far fa-trash-alt"></i></button>
                </td>
              </tr>

            ))}
            </>
            )}


  </tbody>
</table>
        </div>

        </div>
    )
}

export default Tasks
