import React, {Component} from 'react';
import Utils              from '../utils/Utils';
import { Col, Row, FormControl, FormGroup, FormLabel, Button, FormCheck } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.utils              = new Utils();
        this.formSubmit         = this.isFormSubmitted.bind(this);
        this.state = {
            formSubmitted: false,
            height: 10,
            width: 14,
            tileSize: 1,
            debug: false
        }
    }
    isFormSubmitted() {
        console.log(this.state);
        if (this.state.formSubmitted) {
            //set submitted state back to false once done...
            this.setState({formSubmitted: false});
        } else {

        }
    }
/*
*
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
            <Row>
                <Col md={3}>
                    <FormGroup>
                        <FormLabel>Tile Dimensions: </FormLabel>
                        <FormControl
                            type        = {'number'}
                            id          = {'width'}
                            placeholder = {'Width'}
                            value       = {this.state.width}
                            onChange    = {this.handleChange.bind(this, 'width')} />
                        <FormControl
                            type        = {'number'}
                            id          = {'height'}
                            placeholder = {'Height'}
                            value       = {this.state.height}
                            onChange    = {this.handleChange.bind(this, 'height')} />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <FormLabel>Tile Size: </FormLabel>
                        <FormCheck
                            defaultChecked
                            type     = {'radio'}
                            label    = {'140x140'}
                            id       = {'tileSize-140'}
                            name     = {'tileSize'}
                            value    = {1}
                            onChange = {this.handleChange.bind(this, 'tileSize')}
                        />
                        <FormCheck
                            type     = {'radio'}
                            label    = {'90x90'}
                            id       = {'tileSize-90'}
                            name     = {'tileSize'}
                            value    = {2}
                            onChange = {this.handleChange.bind(this, 'tileSize')}
                        />
                    </FormGroup>
                </Col>
                <Col md={2}>
                    <FormGroup>
                        <FormLabel>Debug: </FormLabel>
                        <FormCheck
                            type     = {'checkbox'}
                            id       = {'debug'}
                            name     = {'debug'}
                            onChange = {this.handleChange.bind(this, 'debug')}
                        />
                    </FormGroup>
                </Col>
                <Col md={1}>
                    <Button
                        type={'button'}
                        value={true}
                        onClick = {this.handleChange.bind(this, 'formSubmitted')}>
                        Generate
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default FormContainer;