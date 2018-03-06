/**
 * Created by zh80138 on 05/02/2018.
 */
import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import Paper from 'material-ui/Paper';
//import Grid from 'material-ui/Grid';
import {CopyToClipboard} from 'react-copy-to-clipboard';
//import {CSSTransitionGroup} from 'react-transition-group'

class TextLink extends React.PureComponent {

    render() {

        let name = this.props.label;
        return (

            <div>
                <CopyToClipboard text={name} onCopy={this.props.copyMessage} ><b>{name} <i className="fa fa-caret-left"></i></b></CopyToClipboard>
            </div>

        )
    }
}


export default TextLink;
