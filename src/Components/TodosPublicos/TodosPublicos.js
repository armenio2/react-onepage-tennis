import React from 'react';
import "./TodosPublicos.css";
import CardMunhaqueira from "../PrimeiraAula/CardMunhaqueira";
import Button from "../Button";





class TodosPublicos extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                    </div>
                    <div id="divGruposAulas" className="col-5">
                        <div className="row">
                            <span>Grupos de Aulas para</span>

                        </div>
                        <div className="row">
                            <span>TODOS OS PÚBLICOS</span>

                        </div>
                        <div className="row">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                        </span>
                        </div>
                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col-8">
                        <div className="row">
                            <CardMunhaqueira />
                            <CardMunhaqueira />
                            <CardMunhaqueira />
                            <CardMunhaqueira />
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">
                        <Button />
                    </div>
                    <div className="col">

                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div id="divGruposAulas" className="col-5">
                        <div className="row">
                            <span>Professores Profissionais</span>

                        </div>
                        <div className="row">
                            <span>ESPECIALIZADOS</span>

                        </div>
                        <div className="row">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                            </span>
                        </div>
                        <div className="row">
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                            </span>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div id="divGruposAulas" className="col-5">
                        <div className="row">
                            <span>Conheça</span>

                        </div>
                        <div className="row">
                            <span>NOSSOS PLANOS</span>

                        </div>
                        <div className="row">
                            <span>Planeje suas aulas de acordo com seus objetivos e sua agenda.
                            <br></br>  Veja abaixo nossos planos:
                            </span>
                        </div>

                    </div>
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-8">
                        <div id="divPlanos" className="row">
                            <div>
                                <span>1x</span>
                                <br></br>
                                <span>Por Semana</span>
                                <br></br>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                            </span>
                            </div>
                            <div >
                                <span>2x</span>
                                <br></br>
                                <span>Por Semana</span>
                                <br></br>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                            </span>
                            </div>
                            <div >
                                <span>3x</span>
                                <br></br>
                                <span>Por Semana</span>
                                <br></br>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                        sed do eiusmod tempor inciditunt ut labore et dolore magnar aliqua.
                                    Ut enim ad minim eniam, quis nostrud exercitation ullamco
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-6">
                        <div id="circlePlano" className="row">
                            <div>1<br></br>Mês</div>
                            <div>3<br></br>Meses</div>
                            <div>6<br></br>Meses</div>
                            <div>1<br></br>Ano</div>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-6">
                        <div id="posPlano" className="row">
                            <div>Mensal</div>
                            <div>Trimestral</div>
                            <div>Semestral</div>
                            <div>Anual</div>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>

            </div>

        );
    }
}

export default TodosPublicos;

