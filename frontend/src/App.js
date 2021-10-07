import React from 'react'
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

function App() {
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

  </Switch>
      
  
    </div>
  );
}

export default App;
