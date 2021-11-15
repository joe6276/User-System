import React, { useEffect } from 'react'
import './App.css';
import { ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import { Route, Switch } from 'react-router';
import Signup from './Components/Signup';
import Projects from './Components/Projects';
import Homepage from './Components/Homepage';
import Tasks from './Components/Tasks';
import AddProject from './Components/AddProject';
import AddTask from './Components/AddTask';
import Users from './Components/Users';
import Footer from './Components/Footer';
import UpdateTask from './Components/UpdateTask'
import UpdateProject from './Components/UpdateProject'
import Userdashboard from './Components/Userdashboard';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/actions/usersActions';



function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    let token = localStorage.getItem('token');
    if(token) dispatch(getLoggedInUser())
  },[])
  return (
    <div className="App">
<ToastContainer/>
      
<Switch>
<Route exact path="/">
<Navbar/>
<Login/>

</Route>

<Route path="/signup" component={Signup}></Route>
<Route path="/projects" component={Projects}></Route>
<Route path="/home" component={Homepage}></Route>
<Route path="/viewp" component={Projects}></Route>
<Route path="/viewt" component={Tasks}></Route>
<Route path="/addp" component={AddProject}></Route>
<Route path="/addt" component={AddTask}></Route>
<Route path="/users" component={Users}></Route>
<Route path="/userdashboard" component={Userdashboard}></Route>
<Route path="/updatetask/:id" component={UpdateTask}></Route>
<Route path="/updateproject/:id" component={UpdateProject}></Route>

  </Switch>
      
  
    </div>
  );
}

export default App;
