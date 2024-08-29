import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets.js'



const Navbar = () => {
  const [isVisible,setisVisible] = useState(false)
  const handle_visible = () =>{
    setisVisible(!isVisible)
  }


  return (
    <div className='navbar'>
        <div className='title-logo' ><img src={ assets.project_logo4 } alt="" />
        <div onClick={handle_visible} className='three-dot'><img  src={assets.three_dot} alt="" /></div>
        
        
        <div className="navbar-mobile">
           <img src={ assets.location_logo } alt="" />
           <button className='login'>Login</button>
            <img src={ assets.cart_logo } className='cart-logo' alt="" /> 
            </div>
        </div>
        <div className={isVisible ? "menu" : "menu-hide"}>
        <ul >
          <li>Location</li>
          <li>Login</li>
          <li>Carts</li>
        </ul>
        </div>
        <div className="search">
            <input type="text" className='search-input' />
           <img src={ assets.search_icon }  alt="" />
            </div> 
            
            <div className="navbar-others">
           <img src={ assets.location_logo } alt="" />
           <button className='login'>Login</button>
            <img src={ assets.cart_logo } className='cart-logo' alt="" /> 
            </div>
        
    </div>
  )
}

export default Navbar