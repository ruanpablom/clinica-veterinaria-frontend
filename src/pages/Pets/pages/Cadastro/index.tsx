import { MdOutlinePets } from "react-icons/md"
import { BotaoVoltar } from "../../../../components"


export function PetsCadastro() {
    return (
        <div className="container">
            <div className="page-header">
                <BotaoVoltar />
                <div className="page-title">
                    <MdOutlinePets id="icon" size={36} />
                    <h1>Pets Cadastro</h1>
                </div>
            </div>
        </div>
    );
}