import { NavLink } from 'react-router-dom'
import {  FaUser, FaUserMd, FaUserCircle  } from "react-icons/fa";
import './styles.css'

export function Home() {
  return (
    <div className='container'>
        <h1 style={{marginTop:20}}>Seja bem vindo!</h1> 
        {/* <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Clinica Veterinária</h1> */}
        <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Você é?</h1>
        <nav>
            {/* <NavLink to="/pets" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <MdOutlinePets size={56} />
                <span>Pets</span>
            </NavLink> */}
            <NavLink to="/atendente" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaUserCircle size={56} />
                <span>Atendente</span>
            </NavLink>
            <NavLink to="/tutores" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaUser size={56} />
                <span>Tutor</span>
            </NavLink>
            {/* <NavLink to="/consultas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaStethoscope  size={56} />
                <span>Consultas</span>
            </NavLink> */}
            <NavLink to="/veterinarios" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaUserMd  size={56} />
                <span>Veterinário</span>
            </NavLink>
        </nav>
    </div>  
  )
}