
import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

import './styles.css'

export function TutoresPrincipal() {
  return (
    <div className="container">
        <div className="page-header">
            <div className="page-title">
                <FaUser id="icon" size={36} />
                <h1>Tutores</h1>
            </div>
            <div className="acoes-container">
                <NavLink to="cadastro" id="btn-cadastrar">Cadastrar</NavLink>
                <div className="pesquisa-container">
                    <input type="text" placeholder="Pesquisar" />
                    <button>Pesquisar</button>
                </div>
            </div>
        </div>
    </div>
  );
}