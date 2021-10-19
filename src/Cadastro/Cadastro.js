import React from "react";
import "./Cadastro.css";
import Imagem from "./react.jpg";

export default function Cadastro () {
    return (
        <>
            <form id="formulario"> 
                    <p id="cadastro">Cadastro</p>
                    <p>Preencha os dados para começar.</p>
                    <div id="nome">
                        <input type="text" placeholder="Nome"></input>
                    </div>
                    <div id="sobrenome">
                        <input type="text" placeholder="Sobrenome"></input>
                    </div>
                    <div id="email">
                        <input type="text" placeholder="E-mail"></input>
                    </div>
                    <div id="senha">
                        <input type="password" placeholder="Senha"></input>
                    </div>
                    <button id="botao">Concluir cadastro</button>
            </form>

            <div id="imagem">
                <img src={Imagem}></img>
            </div>

        </>
    )
}