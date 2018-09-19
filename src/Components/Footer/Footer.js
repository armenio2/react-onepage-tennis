import React from 'react';
import "./Footer.css";









class Footer extends React.Component {
    render() {
        return (

            <div id="footerDiv" className="container-fluid">
                <div  className="row">
                    <div id="footerIcon" className="col-sm">
                        <span>Icon MMoschini</span>
                    </div>
                    <div id="footerText" className="col-sm">
                        <div className="row">
                            <span>Copyright @ 2017 - MMoschini Assessoria Esportia. Todos os direitos Reservados.</span>
                        </div>
                        <div className="row">
                            <span>O conteúdo deste site não pode ser reproduzido ou usado, exeto com a permissão prévia por escrito</span>
                        </div>
                    </div>
                    <div id="footer3Xceler" className="col-sm">
                        <span>3xCeler Icon</span>
                    </div>
                </div>
            </div>



        );
    }
}

export default Footer;

