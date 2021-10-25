import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { registerUserAction, resetNotification } from '../redux/actions/usersActions'
import { toast } from 'react-toastify'

const Signup = () => {

    const history= useHistory();
    const { loading, error, message } = useSelector(state => state.users)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        firstname: "",
        secondname: "",
        email: "",
        password: ""
    });

    const handleSignup = () => {

        if(!user.firstname || user.secondname ||! user.email ||!user.password){
            return toast.error("please Fill all Fields ")
        }
        dispatch(registerUserAction(user))
        toast.success('User Added Successfully')

    }
    const onInputChange = e => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    useEffect(() => {
        return dispatch(resetNotification())
    }, [dispatch])
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
                <Link to="/" className="navbar-brand  py-2 mr-5"> Back to login </Link>
                I am navbar
            </nav>

            <div style={{ width: '600px', marginTop: '20px', margin: "auto" }}>
                <h1 style={{ marginLeft: '100px' }}> Sign up</h1>
                {error && <div className="alert-danger py-2 text-center">{error}</div>}
                {message && <div className="alert-success py-2 text-center">{message}</div>}
                <div class="mb-3 mt-4">
                    <label for="" class="form-label"> First Name</label>
                    <input
                        name="firstname"
                        value={user.firstname}
                        onChange={onInputChange}
                        type="text" class="form-control"
                        placeholder="Enter firstname" />
                </div>
                <div class="mb-4">
                    <label for="formGroupExampleInput2" class="form-label">Second Name</label>
                    <input type="text" class="form-control"

                        name="secondname"
                        value={user.secondname}
                        onChange={onInputChange}
                        placeholder="Enter second name" />
                </div>
                <div class="mb-3 mt-4">
                    <label for="formGroupExampleInput" class="form-label">Email</label>
                    <input type="text" class="form-control" name="email"
                        value={user.email}
                        onChange={onInputChange} placeholder="Enter email" />
                </div>
                <div class="mb-4">
                    <label for="formGroupExampleInput2" class="form-label">Password</label>
                    <input type="text" class="form-control"
                        name="password"
                        value={user.password}
                        onChange={onInputChange} placeholder="Password" />
                </div>

                <button disabled={loading ? true : false} onClick={handleSignup} type="submit" class="btn btn-primary">{loading ? "Loading..." : "Sign Up"}</button>
            </div>
        </div>

    )
}

export default Signup
