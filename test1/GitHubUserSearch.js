import React from 'react';
import Axios from 'axios';

class GithubUserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingProfile: true,
            githubProfile: null,
            errorMsg: null
        }
    }

    componentDidMount() {
        const { username } = this.props;
        this.loadUser(username);
    }


    loadUser = (username) => {

        this.setState(() => {
            return {
                loadingProfile: true,
                githubProfile: {
                    login: username
                }
            }
        })

        return Axios({
            method: 'get',
            url: `https://api.github.com/users/${username}`,
            crossdomain: true
        })
            .then((response) => {
                this.setState(() => {
                    return {
                        loadingProfile: false,
                        githubProfile: response.data
                    }
                })
            })
            .catch((error) => {
                this.setState(() => {
                    return {
                        loadingProfile: false,
                        githubProfile: null
                    }
                })
            });
    }



    generateGithubProfileDisplay = () => {
        const { githubProfile } = this.state;
        if (!githubProfile) {
            return (
                <div>Likely an error</div>
            )
        }
        return (
            <div className='githubProfile'>
                <h3>{githubProfile.login}</h3>
                <img src={githubProfile.avatar_url || 'https://cdnjs.cloudflare.com/ajax/libs/galleriffic/2.0.1/css/loader.gif'} style={{ maxWidth: '250px' }} alt="Github Gravator" />
                <br />
                <a href={githubProfile.html_url}>{githubProfile.html_url}</a>
            </div>
        )
    }

    render() {
        const { loadingProfile, githubProfile } = this.state;
        const searchResult = loadingProfile && githubProfile === null ? <p>Loading From Github</p> : this.generateGithubProfileDisplay();
        return (
            <div>
                {searchResult}
            </div>
        )
    }
}

export default GithubUserSearch;