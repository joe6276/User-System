import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from '../redux/actions/usersActions'


const Login = () => {
    const { loading, error, message } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleLogin = () => {
        dispatch( loginUserAction(user))
        
    }
    const onInputChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div style={{ width:'500px', margin:'20px auto', backgroundColor:'white'}}>
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
