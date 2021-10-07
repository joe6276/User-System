import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2">
          <Link to="/signup" className="navbar-brand  py-2 mr-5"> Sign Up </Link> 
         I am navbar
         </nav>
     </div>
    )
}

export default Navbar
