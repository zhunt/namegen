import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
//import {CSSTransitionGroup} from 'react-transition-group'

//import Transition from 'react-transition-group/Transition';


import 'typeface-roboto'
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
//import IconButton from 'material-ui/IconButton';
//import CloseIcon from 'material-ui-icons/Close';
import NameGenerator from './components/NameGenerator';

import TextLink from './components/TextLink';
import OutputBox from "./components/OutputBox";
import Form from './components/Form';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.min.css';

// see: https://stackoverflow.com/questions/33650399/es6-modules-implementation-how-to-load-a-json-file
// use loader: 'json-loader' instead

// https://reactcommunity.org/react-transition-group/

// https://stackoverflow.com/questions/32612690/bootstrap-4-glyphicons-migration
// http://blog.creative-tim.com/web-design/bootstrap-glyphicons/

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

            // new ...

            names: [], //data.names,
            verbs: [],
            adjectives: [],

            copied: false, // has an item been copied
            lastItemCopied: null, // last element copied
            generatingNames: false
        };

        this.copyMessage = this.copyMessage.bind(this);

        this.handleStartGenerating = this.handleStartGenerating.bind(this);

    };


    copyMessage(text, result) {
        console.log(`msg: ${text}, result: ${result}`);
        this.setState({copied: result, lastItemCopied: text});
    }


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({copied: false});
    };


    // Call name generator
    handleStartGenerating(form_word1, form_word2) {

        let namesList = [];
        this.setState(() => {
            return ({generatingNames: true});
        });

        this.setState({
            generatingNames: true,
            word1: form_word1,
            word2: form_word2
        });

        let nameGenerate = new NameGenerator(form_word1, form_word2);

        namesList = nameGenerate.getName(10);

        this.setState({names: namesList});

        this.setState(() => {
            return ({generatingNames: false});
        });

    };

    render() {

        const namesList = this.state.names;

        return (


                <div className="App">
                    <form className="form-signin">
                    <div className="text-center mb-4">
                        { /* <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" /> */}
                            <h1 className="h3 mb-3 font-weight-normal">Name Generator</h1>
                        <FadeIn>
                            <p>Enter One or Two Words and Press Generate....</p>
                        </FadeIn>
                    </div>


                            <Form startGeneratingNames={this.handleStartGenerating}/>

                        {this.state.generatingNames}
                            <div>

                                <OutputBox title="My Title">
                                    {namesList.map((name, index) => {
                                            return (
                                                <FadeIn>
                                                <TextLink label={name} key={index.toString()}
                                                          copyMessage={this.copyMessage}/>
                                                </FadeIn>
                                            )

                                        }
                                    )}
                                </OutputBox>

                            </div>


                    </form>

                    <Snackbar
                        open={this.state.copied}
                        message={this.state.lastItemCopied + ' Copied To Clipboard'}
                        autoHideDuration={8000}
                        onClose={this.handleClose}
                    />

                </div>

        );
    }
}

export default App;

/*
 {this.state.copied ? <span key="msg">{this.state.lastItemCopied} Copied.</span> : null}

 */