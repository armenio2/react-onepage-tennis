import React from 'react';
import "./CardInput.css";
import Input from "./Input";




class CardInput extends React.Component {
    render() {
        return (
            <div id="fullCard" >
                <div id="cardDiv">
                    <section>
                        <div className="row">
                            <div className="col-sm">

                            </div>
                            <div className="col-8">
                                <p>AGENDE JÁ SUA</p>
                                <p>PRIMEIRA AULA</p>
                                <h2>100%</h2>
                                <p>GRATUITA</p>
                                <p>SEM COMPROMISSO</p>
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
                                    <div className="col-sm">
                                        <p>Preencha os campos abaixo e entraremos</p>
                                        <p>em contato o mais breve possível.</p>
                                    </div>

                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <Input />
                                    </div>
                                </div>
                                <div className="row">
                                    <button>Quero Agendar</button>
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