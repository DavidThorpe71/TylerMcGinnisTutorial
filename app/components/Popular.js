import React, { Component } from 'react';
import MenuItem from './MenuItem';
import propTypes from 'prop-types';


class Popular extends Component {

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        
        return (
            <ul className="languages">
                {Object.keys(languages).map(key => {
                    return (
                        <MenuItem style={languages[key] === this.props.selectedLanguage ? {color: 'lightskyblue'} : null}
                            key={key} 
                            updateLanguage={this.props.updateLanguage}
                            lang={languages[key]}
                        />
                    )
                })}                   
            </ul>
        )
    };
};


Popular.propTypes = {
    selectedLanguage: propTypes.string.isRequired,
    updateLanguage: propTypes.func.isRequired
}

export default Popular;