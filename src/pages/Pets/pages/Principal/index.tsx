import { MdOutlinePets } from "react-icons/md"
import './styles.css'
import { NavLink } from "react-router-dom";

export function PetsPrincipal() {
  return (
    <div className="container">
        <div className="page-header">
            <div className="page-title">
                <MdOutlinePets id="icon" size={36} />
                <h1>Pets</h1>
            </div>
            <div className="acoes-container">
                <NavLink to="/pets/cadastro" id="btn-cadastrar">Cadastrar</NavLink>
                <div className="pesquisa-container">
                    <input type="text" placeholder="Pesquisar" />
                    <button>Pesquisar</button>
                </div>
            </div>
        </div>
    </div>
  );
}