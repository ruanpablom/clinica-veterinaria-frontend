import { NavLink } from 'react-router-dom'
import {  FaUser, FaUserMd, FaStethoscope, FaPlus  } from "react-icons/fa";
import { MdOutlinePets } from 'react-icons/md';
// import './styles.css'

export function SistemaAtendente() {
  return (
    <div className='container'>
        <h1 style={{marginTop:20}}>Atendimento</h1> 
        {/* <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Clinica Veterinária</h1> */}
        {/* <h1 style={{margin:0, color: 'var(--secondary-color)'}}>Você é?</h1> */}
        <nav>
            <NavLink to="/consultas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <div className="flex itens-center">
                    <FaStethoscope  size={56} />
                    <FaPlus  size={14} />
                </div>
                <span>Nova Consulta</span>
            </NavLink>
            <NavLink to="tutores" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaUser size={56} />
                <span>Tutores</span>
            </NavLink>
            <NavLink to="pets" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <MdOutlinePets size={56} />
                <span>Pets</span>
            </NavLink>
            <NavLink to="veterinarios" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaUserMd  size={56} />
                <span>Veterinários</span>
            </NavLink>
            <NavLink to="consultas" className={({ isActive }) => `item-menu ${isActive ? 'a-active item-menu-active' : ''}`}>
                <FaStethoscope  size={56} /><span>Consultas</span>
            </NavLink>
        </nav>
    </div>  
  )
}