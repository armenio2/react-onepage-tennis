import React from 'react';
import "./BeforFooter.css";
import Input from "../Input";
import Button from "../Button";
import whatsAppIcon from "../../Images/whatsAppIcon.png"
import telefoneIcon from "../../Images/telefoneIcon.png"








class BeforFooter extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div id="beforFoot" className="col-sm">
                        <div className="row">
                            <span>Não perca mais tempo,</span>
                        </div>
                        <div className="row">
                            <span>AGENDE AGORA</span>
                        </div>
                        <div className="row">
                            <span>sua primeira aula!</span>
                        </div>
                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col">
                                <Input labelText="Nome" idInput="thirdStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Telefone" idInput="thirdStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="E-mail" idInput="thirdStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Data" idInput="thirdStyle" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input labelText="Hora" idInput="thirdStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Local" idInput="thirdStyle" />
                            </div>
                            <div className="col">
                                <Input labelText="Tipo" idInput="thirdStyle" typeButton="option" />
                            </div>
                            <div className="col">
                                <Input labelText="Quantidades de Aulas" idInput="thirdStyle" typeButton="option"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Input labelText="Mensagem" idInput="thirdStyle" />
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
                    <div className="col-sm">

                    </div>

                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">
                        <div id="divContatoBeforFooter" className="row">
                            <span><img src={telefoneIcon}></img>11 4837.5691 <img src={whatsAppIcon}></img>11 94140.3231</span>
                        </div>


                    </div>
                    <div className="col-sm">

                    </div>

                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div id="divFuncionamento" className="col-6">

                        <span>Se preferir, entre em contato conosco pelo e-mail:</span>
                        <span>contato@mmoschini.com.br</span>
                    </div>
                    <div className="col-sm">

                    </div>

                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div id="divFuncionamento" className="col-sm">
                        <span>Horário de funcionamento:</span>
                        <span>09h ás 18h</span>
                    </div>
                    <div className="col-sm">

                    </div>

                </div>

            </div>



        );
    }
}

export default BeforFooter;

