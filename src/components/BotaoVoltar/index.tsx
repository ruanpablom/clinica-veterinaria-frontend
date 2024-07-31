import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import './styles.css';

export function BotaoVoltar() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <button className="btn-voltar" onClick={goBack}>
            <MdArrowBackIosNew id="icon" size={18} /> 
            <span>voltar</span>
        </button>
    );
}