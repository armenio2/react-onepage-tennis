import React from 'react';
import "./Input.css";


class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            type: props.typeButton
        };

    }

    render() {
        if (this.state.type == "option") {
            return (
                <div id={this.props.idInput} class="form-group">
                    <label for="sel1">{this.props.labelText}</label>
                    <select class="form-control" id="sel1">
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            );
        } else {
            return (

                <span id={this.props.idInput} className="form-group">
                    <label form="formGroupExampleInput">{this.props.labelText}</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"></input>
                </span>

            );
        }

    }
}

export default Input;

