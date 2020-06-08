import React from 'react';
import SearchBar from './SearchBar';
import devex from '../apis/devex'; 

class App extends React.Component {
    state = { data: [] };

    // need to add endpoint here
    onTermSubmit = async term => {
        const response = await devex.get('/ENDPOINT', {
            params: {
                q: term
            }
        });

        this.setState({
            data: response.data 
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="five wide column">
                            {/* add logic for json table here */}
                        </div>
                    </div>
                </div>
 
            </div>
        );
    }
}
export default App;