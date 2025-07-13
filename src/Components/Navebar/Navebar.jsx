import React from 'react'
import './Navebar.css'

import logo from '../../assets/imgs/logo.png'
 import {Link} from 'react-router-dom'
function Navebar() {
  return  (
    <>

<nav className="navbar navbar-expand-lg  bg-dark text-capitalize   ">
    <img src={logo} alt="" />
  <div className="container-fluid  ">
    
    <button className="navbar-toggler bg-danger " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon   "></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav  ">
    <Link className="navbar-brand" to ={'home'}>Home</Link>

      <li className="nav-item dropdown   ">
        
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
             map
          </a>
          <ul className="dropdown-menu">
            <li><Link to={'map'} className="dropdown-item" >map</Link></li>
            <li><Link to={'boreas'} className="dropdown-item" >boreas</Link></li>
           
           
          </ul>
        </li>



        <li className="nav-item">
          <Link className="nav-link" to={'Vulcon'}>Vulcanites</Link>
        </li>
       

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            gods
          </a>
          <ul className="dropdown-menu">
        
            <li><Link className="dropdown-item" to={'Olmpyans'}>olympians</Link></li>
            
          </ul>
        </li>


        <li className="nav-item">
          <Link to={'GameBooks'} className="nav-link" href="#">game books & lore </Link>
        </li>

        <li className="nav-item">
          <Link to={'Gallery'} className="nav-link" href="#">gallery </Link>
        </li>
        <li className="nav-item">
          <Link to={'Staking'} className="nav-link" href="#">Staking </Link>
        </li>





      </ul>
    </div>
  </div>
</nav>

 
  


    
    </>
  )
}
 
export default Navebar