import React from 'react'
import './Technologies.css'
import {Link, Outlet} from 'react-router-dom'

function Technologies() {
  return (
    <div>
    <p className="display-2 text-center text-primary">Technologies</p>
    
    {/* create links for children */}
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link " to="java">
          Java
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link " to="nodejs">
          Nodejs
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link " to="vue">
          Vue
        </Link>
      </li>

    
    </ul>
    {/* placeholder */}
    <Outlet />
  </div>
  )
}

export default Technologies