import { Outlet } from "react-router-dom";

export function MainLayout(){
    return (
        <>
          <header>
            <div className="logo">
              <a href="#"/>
            </div>
            <nav>
              {/* <NavLink to="/" className={({ isActive}) => isActive ? "a-active" : ""}>
                <FaHome size={14} />
                <span>Home</span>
              </NavLink>
              <NavLink to="pets" className={({ isActive}) => isActive ? "a-active" : ""}>
                <MdOutlinePets size={14} />
                <span>Pets</span>
              </NavLink>
              <NavLink to="tutores" className={({ isActive}) => isActive ? "a-active" : ""}>
                <FaUser size={14} />
                <span>Tutores</span>
              </NavLink>
              <NavLink to="consultas" className={({ isActive}) => isActive ? "a-active" : ""}>
                <FaStethoscope  size={14} />
                <span>Consultas</span>
              </NavLink>
              <NavLink to="veterinarios" className={({ isActive}) => isActive ? "a-active" : ""}>
                <FaUserMd  size={16} />
                <span>Veterinários</span>
              </NavLink> */}
            </nav>
            <div className="right"></div>
          </header>
          <div id="content" className="content">
            <Outlet />
          </div>
        </>
      );
}