import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/track">Track</Link></li>
                <li><Link to="/reports">Reports</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
