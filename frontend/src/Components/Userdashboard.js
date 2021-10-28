import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProject } from '../redux/actions/projectActions'
import { loginUserAction } from '../redux/actions/usersActions'
import { getTasks, getUserTask, updateTasks } from '../redux/actions/taskActions'
let taskid;

const Userdashboard = () => {
  const { loguser } = useSelector(state => state.users)
  const { usertasks } = useSelector(state => state.tasks)

  const dispatch = useDispatch();
  // useEffect(() => {  
  //   dispatch(getUserTask(loguser.email))
  // }, [])
  const { usersproject } = useSelector(state => state.projects)
  //console.log(usersproject)

  useEffect(() => {
  }, [usersproject])
  useEffect(() => {
  }, [usertasks])


  //console.log({ usertasks })

  useEffect(() => {}, [])
  
  
   
   const handleUpdate=(taskid)=>{

      dispatch(updateTasks(taskid))
      dispatch(getTasks())
      console.log(taskid)
    }
       
 
    
  
 
  


  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home" className="navbar-brand  py-2 ml-5"> Project<span style={{ color: 'red' }}>Manager</span> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link className="navbar-brand  py-2  ml-5 mr-5" style={{ height: '50px', width: '50px', marginLeft: '1000px' }}>
              <i class="fa fa-user"
                aria-hidden="true"></i> Hello {loguser.firstname} </Link>


          </div>
        </div>
      </nav>

      <div className="d-flex justify-content-between">
        <div style={{ margin: 'auto', height: '100%', padding: '15px', backgroundColor: '#E7E9ED' }}>
          <h1> PROJECT</h1>
          <h3>{usersproject.projectname}</h3>
          <br />
          <br />
          <br />
          <h3>{usersproject.projectduration}</h3>
          <br />
          <br />
          <br />
          <h3>{usersproject.email}</h3>
          <br />
          <br />
          <br />
        </div>


        <div>
          <table class="table table-stripedtable mt-5" style={{ marginRight: '20px', marginLeft: '20px', width: '900px' }}>
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
              {usertasks?.map((task, idx) => (
                <tr key={task.taskid}>
                  <th scope="row">{idx + 1}</th>
                  <td>{task.taskdescription}</td>
                  <td>{task.project}</td>
                  <td>{task.createdat}</td>
                  <td>{task.email}</td>
                  <td>
                    <button 
                    type="button" 
                    onClick={() => handleUpdate(task.taskid)} 
                    className={task.status.trim() === "Completed" ? "btn btn-success mx-2" : "btn btn-primary  mx-2"}
                    >

                      {task.status.trim() === "Completed" ? <i class="fa fa-check" aria-hidden="true"> Completed </i> : 
                      
                      <i class="fa fa-undo" aria-hidden="true"> Click here</i>} 
                   
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>





    </div>
  )
}

export default Userdashboard
