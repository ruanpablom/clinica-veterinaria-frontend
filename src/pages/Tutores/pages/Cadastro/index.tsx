import { BotaoVoltar } from "../../../../components"
import { FaUser } from "react-icons/fa";


export function TutoresCadastro() {
    return (
        <div className="container">
            <div className="page-header">
                <BotaoVoltar />
                <div className="page-title">
                    <FaUser id="icon" size={36} />
                    <h1>Cadastro Tutor</h1>
                </div>
            </div>
        </div>
    );
}