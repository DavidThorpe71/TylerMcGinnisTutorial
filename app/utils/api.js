import axios from 'axios';

module.exports = {
    fetchPopularRepos: (language) => {
        var endpointURI = `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`;

        return axios.get(endpointURI)
            .then(res => res.data.items);
    }
}