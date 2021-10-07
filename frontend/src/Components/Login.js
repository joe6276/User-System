import React from 'react'

const Login = () => {
    return (
        <div style={{ width:'500px', margin:'20px auto', backgroundColor:'white'}}>
            <h1 style={{marginLeft:'100px'}}> Login User</h1>
            <div  class="mb-3 mt-4">
                <label for="formGroupExampleInput" class="form-label">Email</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter email"/>
                </div>
                <div class="mb-4">
                <label for="formGroupExampleInput2" class="form-label">Password</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Password"/>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
        </div>
    )
}

export default Login
