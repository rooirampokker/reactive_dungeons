import React, {Component} from 'react';
import Utils              from '../utils/Utils';
import { Col, Row } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class Dungeon extends Component {
    constructor(props) {
        super(props);
        this.utils = new Utils();
        this.state = {

        }
    }
    /*
    * ensure that this.state.[attr] matches attributeID
    */
    handleChange(attributeID, e) {
        let attrVal = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        this.setState({[attributeID]: attrVal}, () => {this.isFormSubmitted()});
    }
    /*
    *
    */
    render() {
        return (
            <div>
                {"dungeon here"}
            </div>
        );
    }
}

export default Dungeon;