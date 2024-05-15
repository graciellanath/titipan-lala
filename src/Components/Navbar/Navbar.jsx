import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

    const[sticky, setsticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false);
        })
    },[]);

  return (
    <nav className={`containernavbar ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-165} duration={500}>About</Link></li>
        <li><Link to='title1' smooth={true} offset={-150} duration={500}>Destination</Link></li>
        <li><Link to='title3' smooth={true} offset={-150} duration={500}>Culinary</Link></li>
        <li><Link to='members' smooth={true} offset={-220} duration={500} className='btn our-member-btn'>Our Team</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
