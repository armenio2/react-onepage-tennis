import React from 'react';
import "./CardMunhaqueira.css";
import ballTennis from "../Images/ballTennis.png";





class CardMunhaqueira extends React.Component {
    render() {
        return (
            <div id={this.props.divIdCard} class="card" >
                <img class="card-img-top" src={ballTennis} alt="Card image cap"></img>
                <div id="cardGeral" class="card-body">
                    <div><span>Title</span></div>
                    <div><span>Subtitle</span></div>

                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor inciditunt ut labore et dolore magnar</p>
                </div>
            </div>

        );
    }
}

export default CardMunhaqueira;

