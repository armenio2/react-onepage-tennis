import React from 'react';
import "./CardInput.css";
import Input from "../Input";
import Button from "../Button";




class CardInput extends React.Component {
    render() {
        return (
            <div id="fullCard" >
                <div id="cardDiv">
                    <section>
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div id="divTitleCard" className="col-8">
                                <div className="row">
                                    <span>AGENDE JÁ SUA</span>
                                </div>
                                <div className="row">
                                    <span>PRIMEIRA AULA</span>
                                </div>
                                <div className="row">
                                    <span>100%</span>
                                </div>
                                <div className="row">
                                    <span>GRATUITA</span>
                                </div>
                                <div className="row">
                                    <span>SEM COMPROMISSO</span>
                                </div>
                            </div>
                            <div className="col-sm">

                            </div>
                        </div>
                    </section>
                </div>
                <div id="inputCardDiv">
                    <div className="row">
                        <div className="col-sm">

                        </div>
                        <div className="col-8">
                            <section >
                                <div className="row">
                                    <div id="divTitleDiamondSquare" className="col-sm">

                                        <span>Preencha os campos abaixo e entraremos em contato o mais breve possível.</span>


                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input labelText="Nome" idInput="firstStyle" />
                                    </div>
                                    <div className="col-sm">
                                        <Input labelText="Telefone" idInput="firstStyle" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input labelText="E-mail" idInput="firstStyle" />
                                    </div>
                                    <div className="col-sm">
                                        <Input labelText="Local" idInput="firstStyle" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input labelText="Data" idInput="firstStyle" />
                                    </div>
                                    <div className="col-sm">
                                        <Input labelText="Hora" idInput="firstStyle" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input labelText="Tipo" idInput="firstStyle" typeButton="option" />
                                    </div>
                                    <div className="col-sm">
                                        <Input labelText="Quantidade de Aulas" idInput="firstStyle" typeButton="option" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input labelText="Mensagem" idInput="firstStyle" />
                                    </div>
                                </div>
                                <div id="divButtonCard" className="row">
                                    <Button idButton="firstButton" />
                                </div>
                            </section>
                        </div>
                        <div className="col-sm">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardInput;