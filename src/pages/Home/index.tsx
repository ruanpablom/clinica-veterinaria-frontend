import { NavLink } from 'react-router-dom'
import {  FaUser, FaUserMd, FaStethoscope  } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import './styles.css'

export function Home() {
  return (
    <>
        <h1 style={{margin:0}}>Seja bem vindo!</h1> 
        <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Clinica Veterinária</h1>
        <nav>
            <NavLink to="/pets" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <MdOutlinePets size={56} />
            <span>Pets</span>
            </NavLink>
            <NavLink to="/tutores" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaUser size={56} />
            <span>Tutores</span>
            </NavLink>
            <NavLink to="/consultas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaStethoscope  size={56} />
            <span>Consultas</span>
            </NavLink>
            <NavLink to="/veterinarios" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
            <FaUserMd  size={56} />
            <span>Veterinários</span>
            </NavLink>
        </nav>
    </>  
  )
}