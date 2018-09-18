import React from 'react';
import "./ContatComponent.css";
import whatsAppIcon from "../../Images/whatsAppIcon.png"

class ContatComponent extends React.Component {



    render() {
        return (

            <div style={divStyle} id="divContat" className="shadow p-8 mb-5 bg-white rounded">
                11 4837.5691
            <img style={imgStyle} src={whatsAppIcon} alt="WhatsAppIcon" />
                11 94140.3231
            </div>

        );
    }
}

export default ContatComponent;


const divStyle = {
    width: 300,
    height: 45,
};
const imgStyle = {
    height: 50,
};
