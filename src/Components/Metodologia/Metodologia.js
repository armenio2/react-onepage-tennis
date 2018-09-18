import React from 'react';
//import PageIcon from "./PageIcon";
//import ContatComponent from "./ContatComponent";
import CardWhatsApp from "./CardWhatsApp";
import CardInput from "./CardInput";

class Metodologia extends React.Component {
    render() {
        return (

            <div className="container-fluid">

                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col-9">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h4>Quando o assunto é aula de Tênis a MMoshini é</h4>
                                    <p>ESPECIALISTA</p>
                                    <h6>Os benefícios do tênis são inúmeros é uma
                                        atividade de alto gasto calórico e força
                                        muscular, a cada hora de jogo de Tênis
                                        pode-se gastar até 500 calorias,
                                        dependendo do ritmo de jogo e
                                        treinamento.

                                        Com tênis você obtém melhorias na
                                        capacidade cardiovascular, nos
                                        reflexos e até no potencial de
                                        concentração, por aliar o ritmo do
                                        aeróbico com os movimentos
                                        localizados e as técnicas de jogo.
                                    </h6>
                                </div>
                                <div className="col-8">
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

export default Metodologia;

