import React from 'react'
import '../css/navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/settings" >Settings</NavLink>
            <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/" >Track</NavLink>
            <NavLink style={({ isActive }) => (isActive ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {})} to="/reports" >Reports</NavLink>
        </nav>
    )
}

export default Navbar
