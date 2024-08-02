import { NavLink, Outlet } from "react-router-dom";

import '../styles.css'
import { MdOutlinePets } from "react-icons/md";
import { FaStethoscope, FaUser, FaUserMd } from "react-icons/fa";

export function AtendimentoLayout() {
  return (
    <>
      <header>
        <div className="logo">
          <NavLink to="/atendente"/>
        </div>
        <nav>
          {/* <NavLink to="/atendente" className={({ isActive}) => isActive ? "a-active" : ""}>
            <FaHome size={14} />
            <span>Home</span>
          </NavLink> */}
          <NavLink to="tutores" className={({ isActive}) => isActive ? "a-active" : ""}>
            <FaUser size={14} />
            <span>Tutores</span>
          </NavLink>
          <NavLink to="pets" className={({ isActive}) => isActive ? "a-active" : ""}>
            <MdOutlinePets size={14} />
            <span>Pets</span>
          </NavLink>
          <NavLink to="veterinarios" className={({ isActive}) => isActive ? "a-active" : ""}>
            <FaUserMd  size={16} />
            <span>Veterinários</span>
          </NavLink>
          <NavLink to="consultas" className={({ isActive}) => isActive ? "a-active" : ""}>
            <FaStethoscope  size={14} />
            <span>Consultas</span>
          </NavLink>
        </nav>
        <div className="right">
          <strong>Atendimento</strong>
        </div>
      </header>
      <div id="content" className="content">
        <Outlet />
      </div>
    </>
  );
}