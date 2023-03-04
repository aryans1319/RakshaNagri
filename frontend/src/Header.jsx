import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Title = () => {
    return (
      <Link to="/">
        <img className="h-16 p-1 rounded-full" alt="logo" src="https://thumbs.dreamstime.com/z/holding-hand-logo-community-help-monoline-style-130926990.jpg" />
      </Link>
    ); 
  };
   const  Header = () => {
    const [login,setLogin]=useState(true);
    return (
      <div className="flex justify-between bg-pink-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className='flex p-1 ml-2  space-x-6'>
           
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/create">Post</Link> 
            </li>
            <li>
              <Link to="/account">My-account</Link> 
            </li>
              <li>
                {login?<Link to="/login">
                Login
            </Link>:<Link to="/logout">
                Logout
            </Link>}
            
                </li>
          </ul>
        </div> 
      </div>
    );
  };
  export default Header;

