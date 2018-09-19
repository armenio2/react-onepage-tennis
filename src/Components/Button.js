import React from 'react';
import "./Button.css";


class Button extends React.Component {



    render() {
        return (

            <button id={this.props.idButton} type="button" class="btn btn-success">Quero Agendar!</button>

        );
    }
}

export default Button;

