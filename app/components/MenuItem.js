import React, { Component } from 'react';

class MenuItem extends Component {

    handleClick = () => {
        this.props.updateLanguage(this.props.lang);
    };

    render() {
        return (
            <li 
                style={this.props.style}
                onClick={this.handleClick}>{this.props.lang}</li>
        )
    }
}

export default MenuItem;