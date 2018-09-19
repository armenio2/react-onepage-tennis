import React from 'react';
import "./PrimeiraAula.css";
import playStay from "../../Images/playAndStay.png";
import CardMunhaqueira from "./CardMunhaqueira";
import Input from "../Input";
import Button from "../Button";



class PrimeiraAula extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        <img id="playStay" src={playStay}></img>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div id="divDescription" className="col-sm">
                        <span>Utilizamos um método construtivista, onde o aluno depois de orientado passa a experienciar, por conta de sua
                            natureza e intuição, as mais variadas situações possíveis dentro do esporte. Dessa forma utilizamos do
                            programa <a ref="#">Play and Stay</a>, da <a ref="#">(ITF)</a>, para facilitar a parte técnica do aluno, com bolas mais lentas e quadras
                            reduzidas, fica mais fácil desenolver uma técnica dentro dos padrões biomecânicos sugeridos pela <a ref="#">ITF</a>.
                            </span>
                        <section>
                            <span>
                                Acreditamos que esta mescla do programa <a ref="#">Play and Stay</a> + o desenvolvimento técnico-tatico com nosso
                                programa de frequência de aulas seja o caminho ideal para a formação de aperfeiçoamento do jogo de tênis,
                            <a ref="#">agende</a> sua <strong> PRIMEIRA AULA GRATUITA </strong> e confira a diferença em quadra!
                        </span>
                        </section>


                    </div>
                    <div className="col-sm">

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
                <div id="courtDiv" className="row">
                    <div className="col">

                    </div>
                    <div className="col-6">

                        <div className="row">
                            <div id="titlePrimeiraAula" className="col">
                                <span>AGENDE JÁ SUA</span>
                            </div>
                        </div>
                        <div className="row">
                            <div id="titlePrimeiraAula2" className="col">
                                <span>PRIMEIRA AULA</span>
                            </div>
                        </div>
                        <div className="row">
                            <div id="titlePrimeiraAula3" className="col">
                                <span>100% GRATUITA!</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input labelText="Nome" idInput="secondStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Telefone" idInput="secondStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="E-mail" idInput="secondStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Data" idInput="secondStyle" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input labelText="Hora" idInput="secondStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Local" idInput="secondStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Tipo" idInput="secondStyle" typeButton="option" />
                            </div>
                            <div className="col">
                                <Input labelText="Quantidade de Aulas" idInput="secondStyle" typeButton="option" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input labelText="Mensagem" idInput="secondStyle" />
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

                    </div>
                    <div className="col">

                    </div>
                </div>

            </div>

        );
    }
}

export default PrimeiraAula;

