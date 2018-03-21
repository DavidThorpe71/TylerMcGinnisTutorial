import React, { Component } from 'react';

class Popular extends Component {
    state = {
        selectedLanguage: 'All'
    };

    updateLanguage = () => {
        this.setState({
            selectedLanguage: null
        });
    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        
        return (
            <ul className="languages">
                {languages.map(item => {
                    return (<li key={item} 
                                onClick={this.updateLanguage}>
                                    {item}
                            </li>
                            )
                })}
            </ul>
        )
    }
}

export default Popular;