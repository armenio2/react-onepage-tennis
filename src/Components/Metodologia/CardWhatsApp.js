import React from 'react';
import whatsAppIcon from "../../Images/whatsAppIcon.png"
import "./CardWhatsApp.css";



class CardWhatsApp extends React.Component {
    render() {
        return (
            <div className="card" id="cardWhatsApp" >
                <img className="card-img-top" src={whatsAppIcon} alt="WhatsAppIcon"></img>
                <p className="card-text">Manda um<span id="whatsText">Whatsapp!</span></p>
            </div>
        );
    }
}

export default CardWhatsApp;

