/**
 * Created by zh80138 on 05/02/2018.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OutputBox extends Component {

    render() {

        //const extraPadding = { padding: '2rem'};

        return(

            <div>
                <p>Generated Names:</p>

                {this.props.children}

                <p><small>(Click on name to copy)</small></p>
            </div>
        );
    }
}

export default OutputBox;




