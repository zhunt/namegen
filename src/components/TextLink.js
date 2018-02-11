/**
 * Created by zh80138 on 05/02/2018.
 */
import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class TextLink extends React.PureComponent {

    render() {

        let name = this.props.label;
        return (
           <div>
                <CopyToClipboard text={name} onCopy={this.props.copyMessage} ><b>{name} <i className="material-icons hoverState">content_copy</i></b></CopyToClipboard>
            </div>
        )
    }
}


export default TextLink;
