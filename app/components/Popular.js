import React, { Component } from 'react';
import MenuItem from './MenuItem';
import RepoGrid from './RepoGrid';
import propTypes from 'prop-types';
import api from '../utils/api';


class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    };

    updateLanguage = (lang) => {
        this.setState({
            selectedLanguage: lang
        });
        api.fetchPopularRepos(lang)
            .then(repos => {
                this.setState({
                    repos
                })
            })
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {
        const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        
        return (
            <div className="pop-container">
                <ul className="languages">
                    {Object.keys(languages).map(key => {
                        return (
                            <MenuItem style={languages[key] === this.state.selectedLanguage ? {color: 'lightskyblue'} : null}
                            key={key} 
                            updateLanguage={this.updateLanguage}
                            lang={languages[key]}
                            />
                        )
                    })}                   
                </ul>
                {!this.state.repos ? <p>Loading...</p> :
                    <RepoGrid repos={this.state.repos} />
                }
            </div>
        )
    };
};


export default Popular;