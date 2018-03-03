import React, {Component} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NameForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "none"
        };

        this.handleChange = this.handleChange.bind(this);
        this.GoButtonPressed = this.GoButtonPressed.bind(this);
    }


    handleChange(event) {

        let fieldName = event.target.id; //toString();

        this.setState({[fieldName]: event.target.value});
    };

    GoButtonPressed() {
        // validate


        if (this.state.word1 !== "undefined" && this.state.word1.length > 0) {
            let word1 = this.state.word1.slice();
            this.setState({word1: word1.trim()})
        }
        if (this.state.word2 !== "undefined" && this.state.word2.length > 0) {
            let word2 = this.state.word2.slice();
            this.setState({word2: word2.trim()})
        }

        // tell apps to start generating names, pass them up
        this.props.startGeneratingNames(this.state.word1, this.state.word2);
    };


    render() {
        return (

            <Form>
                <FormGroup>
                    <Label for="exampleEmail">Word 1</Label>
                    <input type="text"
                           id="word1"
                           label="Word One:"
                           placeholder="First name/Street name/etc."
                           margin="normal"
                           onChange={this.handleChange}

                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Word 2</Label>
                    <input type="text"
                           id="word2"
                           label="Word Two:"
                           placeholder="Friend's, Pet's name, etc."
                           margin="normal"
                           onChange={this.handleChange}

                    />
                </FormGroup>

                    <Button onClick={this.GoButtonPressed}>Go!</Button>

            </Form>

        );
    }

}

export default NameForm;