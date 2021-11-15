import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getUserProject } from '../redux/actions/projectActions'
import { getUserTask } from '../redux/actions/taskActions'
import { loginUserAction } from '../redux/actions/usersActions'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const{loguser,error,message} = useSelector(state => state.users)
    console.log(loguser);

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleLogin = () => {
        if(! user.email ||!user.password){
            return toast.error("Please Fill all Fields ")
        }
        dispatch( loginUserAction(user))   
       
        
    }


    useEffect(() => {
        if(loguser.id && loguser.role=='user'){
            toast.success('Logged in Successfully')
            history.push('/userdashboard')
            
        }else if(loguser.id && loguser.role=='admin'){
            history.push('/viewp')
        }
        
    }, [loguser])

    const onInputChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div  style={{ marginTop:'0px'}} className="d-flex ">
        <div style={{marginLeft:'0px', height:'400px'}}>
        <img  style={{marginLeft:'0px', width:'600px', height:'600px'}} src ="https://cdn.pixabay.com/photo/2017/10/11/11/43/multitasking-2840792__340.jpg"/>
        </div>
        <div style={{ width:'600px', marginLeft:'40px', marginTop:'80px', backgroundColor:'white'}}>
             {error && <div className="alert-danger py-2 text-center">{error}</div>}
            {/* {message && <div className="alert-success py-2 text-center">{message}</div>} */}
          
            
         
            
           
      <h1>  Login User </h1>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Email</label>
                <input type="text" class="form-control" 
                id="formGroupExampleInput" 
                name="email"
                value={user.email}
                onChange={onInputChange}
                placeholder="Enter email"/>
                </div>
                <div class="mb-4">
                <label for="formGroupExampleInput2" class="form-label">Password</label>
                <input type="password" class="form-control"
                 id="formGroupExampleInput2"
                 name="password"
                 value={user.password}
                 onChange={onInputChange}
                  placeholder="Password"/>
                </div>
                <button type="submit" onClick={handleLogin} class="btn btn-primary">Login</button>
                 <br/>
                <br/>
                <Link to="/signup"  style={{ fontSize:'15px'}} className="navbar-brand  py-2 mr-5"> Not a Member ? Please Sign-UP</Link>
        </div>
        </div >
       
    )
}

export default Login
