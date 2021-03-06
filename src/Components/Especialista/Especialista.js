import React from 'react';
import CardWhatsApp from "./CardWhatsApp";
import CardInput from "./CardInput";
import tenista2 from "../../Images/tenista2.png"
import "./Especialista.css";



class Especialista extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col-9">
                        <div className="container">
                            <div className="row">
                                <div id="divEspecialista" className="col-sm">
                                    <div className="row">
                                        <span>Quando o assunto é aula de Tênis a <strong>MMoshini</strong> é</span>
                                    </div>
                                    <div className="row">
                                        <span>ESPECIALISTA</span>
                                    </div>
                                    <div className="row">
                                        <span>Os benefícios do tênis são inúmeros é uma
                                                atividade de alto gasto calórico e força
                                                muscular, a cada hora de jogo de Tênis
                                                pode-se gastar até 500 calorias,
                                                dependendo do ritmo de jogo e
                                                treinamento.
                                        </span>
                                        <span>
                                            Com tênis você obtém melhorias na
                                            capacidade cardiovascular, nos
                                            reflexos e até no potencial de
                                            concentração, por aliar o ritmo do
                                            aeróbico com os movimentos
                                            localizados e as técnicas de jogo.
                                        </span>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <img id="tenista1" src={tenista2}></img>
                                </div>
                                <div className="col-6">
                                    <CardInput />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <CardWhatsApp />
                    </div>
                </div>

            </div>

        );
    }
}

export default Especialista;

/* <img id="tenista1" src={tenista1}></img>*/