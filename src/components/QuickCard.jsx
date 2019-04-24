import React, {Component} from 'react';
import { Card } from 'react-bootstrap';

class QuickCard extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        <div
                            className='blockquote text-center'>
                            <div>{this.title}</div>
                        </div>
                    </Card.Title>
                    {this.content}
                </Card.Body>
            </Card>
        );
    }
}

export default QuickCard;