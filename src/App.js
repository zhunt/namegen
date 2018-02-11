import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import NameGenerator from './components/NameGenerator';
import TextLink from './components/TextLink';
import OutputBox from "./components/OutputBox";
import Form from './components/Form';


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

    handleStartGenerating(form_word1, form_word2) {
        this.setState(() => {
            return ({generatingNames: true});
        });

        this.setState({
            generatingNames: true,
            word1: form_word1,
            word2: form_word2
        });

        let nameGenerate = new NameGenerator(form_word1, form_word2);
        let namesList = nameGenerate.getName();

        namesList = [namesList, namesList];

        this.setState({names: namesList});

        this.setState(() => {
            return ({generatingNames: false});
        });

    };

    render() {

        const namesList = this.state.names;

        return (
            <div className="App">
                <Form startGeneratingNames={this.handleStartGenerating}/>

                <OutputBox title="My Title">
                    {namesList.map((name, index) => {
                            return (
                                <TextLink label={name} key={index.toString()} copyMessage={this.copyMessage}/> )
                        }
                    )}
                </OutputBox>

            </div>
        );
    }
}

export default App;
