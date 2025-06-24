import {useState} from "react";
import jett from "../../assets/images/jett.png"
import '../tests/teste.css'

function Teste(){

    const [nome, mudaNome] = useState()


    return (
        <div>
                <img src={jett} alt="" />
                <h1>Seja Bem-Vindo {nome}</h1>
                <button onClick={( ) => {
                        nome = "Diane"
                }}>Clique Aqui</button>
        </div>
    );
}

export default Teste;