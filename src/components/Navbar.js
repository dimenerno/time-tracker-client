import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/about" >About</NavLink></li>
                <li><NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/" >Track</NavLink></li>
                <li><NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/reports" >Reports</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
