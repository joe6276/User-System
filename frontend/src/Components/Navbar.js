import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-2 justify-content-start">

          <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465_960_720.png"
       style={{width:'60px', borderRadius:'60%',height:'50px'}}/>

          <Link to="/" className="navbar-brand  py-2 mr-5"> Welcome To User System </Link> 
          
            
          <Link to="/signup"  style={{marginLeft:'950px'}}className="navbar-brand  py-2 mr-5"> Sign Up </Link> 
        
         </nav>
     </div>
    )
}

export default Navbar
