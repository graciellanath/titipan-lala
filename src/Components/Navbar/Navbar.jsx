import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`containernavbar ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className="logo" />
            <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
                <li><Link to="hero" smooth={true} offset={0} duration={500} className="nav-link">Home</Link></li>
                <li><Link to="about" smooth={true} offset={-165} duration={500} className="nav-link">About</Link></li>
                <li><Link to="title1" smooth={true} offset={-150} duration={500} className="nav-link">Destination</Link></li>
                <li><Link to="title3" smooth={true} offset={-150} duration={500} className="nav-link">Culinary</Link></li>
                <li><Link to="members" smooth={true} offset={-220} duration={500} className="btn our-member-btn nav-link">Our Team</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
