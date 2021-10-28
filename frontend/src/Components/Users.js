import React, {useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAssignedUsers, getUsers} from '../redux/actions/usersActions'

const Users = () =>  {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getUsers())
    dispatch(getAssignedUsers())
  },[dispatch])


  const { users, ausers, usersLoading, usersError } = useSelector(state => state.users)
  

  // useEffect(() => {
  //   if(!users){
  //     dispatch(getUsers())
  //   }
    
  // }, [users,dispatch])

  // useEffect(() => {
  //   if(!ausers){
  //     dispatch(getAssignedUsers())
  //   }
    
  // }, [ausers,dispatch])


  

  // console.log(ausers)
  // console.log(users)
    return (
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand  py-2 ml-5"> Project<span style={{ color: 'red' }}>Manager</span> </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/viewp" className="navbar-brand  py-2  ml-5 mr-5" style={{ marginLeft: '200px' }}> View Projects</Link>
            <Link to="/viewt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> View Tasks </Link>
            <Link to="/addp" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Projects</Link>
            <Link to="/addt" className="navbar-brand  py-2 mr-5" style={{ marginLeft: '20px' }}> Add Task</Link>
            <Link to="/users" className="navbar-brand  py-2 mr-5" style={{marginLeft:'20px'}}> Users </Link> 
          </div>
        </div>
      </nav>

      <div>

      <table class="table table-stripedtable mt-5" style={{ marginLeft: '200px', width: '1000px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstNAme</th>
              <th scope="col">SecondName</th>
              <th scope="col">Project</th>
              <th scope="col">Email</th>
            
            </tr>
          </thead>
          <tbody>
          {usersLoading ? <h4>Loading..........</h4> :(
      <>
            {ausers.map((auser, idx) => (
              <tr key={auser.id}>
                <th scope="row">{idx+1}</th>
                <td>{auser.firstname}</td>
                <td>{auser.secondname}</td>
                <td>{auser.Project}</td>
                <td>{auser.email}</td>
                
              </tr>

           

            ))}
            </>
            )}

          </tbody>
          </table>
       
          </div>

         
      <div>
          <h1 className=" d-flex justify-content-center"> Unassigned Students  </h1>
          <table class="table table-stripedtable mt-5" style={{ marginLeft: '200px', width: '1000px' }}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">FirstNAme</th>
              <th scope="col">SecondName</th>
              <th scope="col">Email</th>
            
            </tr>
          </thead>
          <tbody>
          {usersLoading ? <h4>Loading..........</h4> :(
      <>
            {users.map((user, idx) => (
              <tr key={user.id}>
                <th scope="row">{idx+1}</th>
                <td>{user.firstname}</td>
                <td>{user.secondname}</td>
                <td>{user.email}</td>
                
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

export default Users
