
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = ()=>{
  


    return (
      <>
        <nav className="navbar fixed-top  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" to="/">PaperWala</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-white"></span>
    </button>
    <div className="collapse navbar-collapse nav-tabs" id="navbarSupportedContent" style={{cursor:'pointer'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 "  >
        <li className="nav-item">
          <Link  className="nav-link" aria-current="page"  to="/" > Home</Link>
        </li>

          <li className="nav-item"><Link className="nav-link" to="/business" >Business</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/technology">Technology  </Link></li>      
          <li className="nav-item"><Link className="nav-link" to="/foreign">Foreign  </Link></li>      
      </ul>

    </div>
  </div>
</nav>
      </>
    )
  

}
export default Navbar;