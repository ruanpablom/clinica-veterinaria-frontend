import { NavLink, Outlet } from "react-router-dom";

import './styles.css'

export function Layout() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#"/>
        </div>
        <nav>
          <NavLink to="/" className={({ isActive}) => isActive ? "a-active" : ""}>Home</NavLink>
          <NavLink to="pets" className={({ isActive}) => isActive ? "a-active" : ""}>Pets</NavLink>
          <NavLink to="tutores" className={({ isActive}) => isActive ? "a-active" : ""}>Tutores</NavLink>
          <NavLink to="consultas" className={({ isActive}) => isActive ? "a-active" : ""}>Consultas</NavLink>
          <NavLink to="veterinarios" className={({ isActive}) => isActive ? "a-active" : ""}>Veterinários</NavLink>
        </nav>
        <div className="right"></div>
      </header>
      <div id="content" className="container">
        <Outlet />
      </div>
    </>
  );
}