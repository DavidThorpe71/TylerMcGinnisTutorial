import React from 'react';
import api from '../utils/api';
import Popular from './Popular';
import RepoGrid from './RepoGrid';

class App extends React.Component {
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
        return (
            <div className="container">
                <Popular 
                    selectedLanguage={this.state.selectedLanguage} 
                    updateLanguage={this.updateLanguage} 
                />
                {!this.state.repos ? <p>Loading...</p> :
                    <RepoGrid repos={this.state.repos} />
                }
            </div>
        )
    }
}

export default App;