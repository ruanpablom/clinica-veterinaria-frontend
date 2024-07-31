import { Outlet } from "react-router-dom";

export function Pets() {
  return (
    // <div className="container">
    //     <div className="page-header">
    //         <div className="page-title">
    //             <MdOutlinePets id="icon" size={36} />
    //             <h1>Pets</h1>
    //         </div>
    //         <div className="acoes-container">
    //             <button id="btn-cadastrar">Cadastrar</button>
    //             <div className="pesquisa-container">
    //                 <input type="text" placeholder="Pesquisar" />
    //                 <button>Pesquisar</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <>
        <Outlet/>
    </>
  );
}