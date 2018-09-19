import React from 'react';
import "./CardMunhaqueira.css";
import ballTennis from "../../Images/ballTennis.png";





class CardMunhaqueira extends React.Component {
    render() {
        return (
            <div id="divMunhequeiraCard" class="card" >
                <img class="card-img-top" src={ballTennis} alt="Card image cap"></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        );
    }
}

export default CardMunhaqueira;

