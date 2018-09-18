import React from 'react';
import "./Metodologia.css";
import tenista1 from "../../Images/tenista1.png"


class Metodologia extends React.Component {
    render() {
        return (
            <div id="divmedotologia" className="container-fluid">
                <div className="row">
                    <div className="col-5">
                        <div className="row">
                            <div className="col">

                            </div>
                            <div className="col">
                                <p>Nossa Metodologia é</p>
                                <p>Diferenciada</p>
                                <p>A MMoschini preza pela, comodidade e profissionalismo.
                                  Por este motivo levamos a prática do tênis até o cliente,
                                  seja no condomínio, na escola, clube ou em quadras
                                  alugadas de sua escolha. Contamos com uma equipe altamente qualificada
                                  formada por profissionais registrados no CREF-SP e especializados em Tênis.
                                </p>
                                <p>Nossa metodologia de ensino é outro diferencial e está focada
                                  nos objetivos e no respeito aos diferentes perfis e faixa etária
                                  de nossos clientes.Nossas aulas de tênis são personalizadas
                                  para cada aluno, respeitando os limites físicos e tornando a
                                  prática do tênis prazerosa e divertida.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm">
                        <img id="tenista2" src={tenista1}></img>

                    </div>

                </div>
            </div>
        );
    }
}

export default Metodologia;

