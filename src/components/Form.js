import React, { Component } from 'react';
//import MenuItem from 'material-ui/Menu/MenuItem';
// import TextField from 'material-ui/TextField';
// import Grid from 'material-ui/Grid';
// //import Paper from 'material-ui/Paper';
// import Button from 'material-ui/Button';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: "none"
        };

        this.handleChange = this.handleChange.bind(this);
        this.GoButtonPressed = this.GoButtonPressed.bind(this);
    }


    handleChange(event) {

        let fieldName = event.target.id; //toString();

        this.setState({ [fieldName] : event.target.value });
    };

    GoButtonPressed(e) {
      // validate
        e.preventDefault();

        if ( this.state.word1 !== undefined && this.state.word1.length > 0 ) {
            let word1 = this.state.word1.slice();
            this.setState({word1: word1.trim()  })
        }
        if ( this.state.word2 !== undefined && this.state.word2.length > 0) {
            let word2 = this.state.word2.slice();
            this.setState({word2: word2.trim() })
        }

        // tell apps to start generating names, pass them up
        this.props.startGeneratingNames(this.state.word1, this.state.word2);
    };



    render() {
        return (
           <div>
                    <div className="form-label-group">
                        <input
                            id="word1"
                            placeholder="First name/Street name/etc."
                            className="form-control"
                            onChange={this.handleChange}
                            autoFocus="true"
                        />
                        <label htmlFor="inputEmail">Word 1</label>
                    </div>

                    <div className="form-label-group">
                        <input
                            id="word2"
                            placeholder="Friend's, Pet's name, etc."
                            margin="normal"
                            onChange={this.handleChange}
                            className="form-control"
                        />
                        <label htmlFor="inputEmail">Word 2</label>
                    </div>

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.GoButtonPressed}>Generate</button>
                    <p className="mt-5 mb-3 text-muted text-center">xxx</p>
           </div>
        );
    }

}

export default Form;