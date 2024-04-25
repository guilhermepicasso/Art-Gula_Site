import "./Login.scss"
import logo from "../../assets/img/logo.png"
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario, setUsusario] = useState("");
    const [password, setPassword] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();

    const handleUsuarioChange = (event) => setUsusario(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);
    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    function dados(event) {
        event.preventDefault();
        if (usuario == "teste 1" && password == "12345") {
            navigate("/painel_controle");
        } else {
            console.log(usuario, password);
        }
    }

    return (
        <div className="telaLogin">
            <div className="capa">
            </div>
            <div className="campos">
                <img src={logo}></img>
                <div className="containerCampos">
                    <p>Bem vindo!</p>
                    <p>Esta área é exclusiva para o administrador da página.</p>
                    <div className="warning"></div>
                    <form>
                        <div className="inputCampos">
                            <p>Usuário</p>
                            <div className="inputCampo">
                                <input placeholder="Usuário" onChange={handleUsuarioChange} />
                            </div>
                        </div>
                        <div className="inputCampos">
                            <p>Senha</p>
                            <div className="inputCampo">
                                <input type={mostrarSenha ? "text" : "password"} placeholder="Senha" onChange={handlePasswordChange}></input>
                                {mostrarSenha ? (
                                    <FaEye onClick={toggleMostrarSenha} />
                                ) : (
                                    <FaEyeSlash onClick={toggleMostrarSenha} />
                                )}
                            </div>
                        </div>
                        <p><a>Esqueceu a senha?</a></p>
                        <div className="enviar"><button onClick={dados}>Login</button></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

