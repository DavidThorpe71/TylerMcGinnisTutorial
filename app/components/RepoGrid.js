import React, { Component } from 'react';

class RepoGrid extends Component {

    render() {
        const repos = this.props.repos;
        return (
            <ul className="popular-list">
                {Object.keys(repos).map(key => {
                    return (
                        <li key={key} className="popular-item">
                            <div className="popular-rank">#{parseFloat(key) + 1}</div>
                            <ul className="space-list-items">
                                <li>
                                    <img 
                                        src={repos[key].owner.avatar_url} 
                                        alt={`Avatar for ${repos[key].owner.login}`} 
                                        className="avatar"/>
                                </li>
                                <li>
                                    <a href={repos[key].html_url}>{repos[key].name}</a>
                                </li>
                                <li>
                                    @{repos[key].owner.login}
                                </li>
                                <li>
                                    {repos[key].stargazers_count} stars
                                </li>
                            </ul>
                        </li>
                    )
                })}
            
            </ul>
        )
    }
}

export default RepoGrid;