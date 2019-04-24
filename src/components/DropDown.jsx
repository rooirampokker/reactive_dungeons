import React, { Component } from 'react';

class DropDown extends Component {
    constructor(props) {
        super(props);
        this.action  = props.action;
        this.name    = props.name;
        this.options = props.options;
    }

    render() {
        let options = (this.options || []).map((optionVal, i) => {
            return <option key={i} value={optionVal}>{optionVal}</option>
        })
        return (
            <select name = {this.name}
                    id   = {this.name}>
                    {options}
            </select>
        )
    }
}

export default DropDown;