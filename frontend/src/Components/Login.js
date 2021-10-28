import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getUserProject } from '../redux/actions/projectActions'
import { getUserTask } from '../redux/actions/taskActions'
import { loginUserAction } from '../redux/actions/usersActions'


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
       
        dispatch( loginUserAction(user))   
       
        
    }


    useEffect(() => {
        if(loguser.id && loguser.role=='user'){
            history.push('/userdashboard')
            dispatch(getUserProject(loguser.email))
            dispatch(getUserTask(loguser.email))
        }else if(loguser.id && loguser.role=='admin'){
            history.push('/viewp')
        }
        
    }, [loguser])

    const onInputChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div style={{ width:'500px', margin:'20px auto', backgroundColor:'white'}}>
             {/* {error && <div className="alert-danger py-2 text-center">{error}</div>} */}
            {message && <div className="alert-success py-2 text-center">{message}</div>}

            <h1 style={{marginLeft:'100px'}}> Login User</h1>
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
                <input type="text" class="form-control"
                 id="formGroupExampleInput2"
                 name="password"
                 value={user.password}
                 onChange={onInputChange}
                  placeholder="Password"/>
                </div>
                <button type="submit" onClick={handleLogin} class="btn btn-primary">Login</button>
        </div>
    )
}

export default Login
