/**
 * Created by zh80138 on 05/02/2018.
 */

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from 'material-ui/styles';
//import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
//import Paper from 'material-ui/Paper';
//import Grid from 'material-ui/Grid';
//import Typography from 'material-ui/Typography';

/*
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});
*/

class OutputBox extends Component {

    render() {

        //const extraPadding = { padding: '2rem'};

        return(
           <div>
                <h2>Generated Names:</h2>

                <div>
                        {this.props.children}
                </div>

                <p><small>(Click on name to copy)</small></p>
           </div>

        );
    }
}

export default OutputBox;




