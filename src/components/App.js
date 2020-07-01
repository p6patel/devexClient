import React from 'react';
import SearchBar from './SearchBar';
import devex from '../apis/devex'; 
import pineapple from './PineappleLogo.jpg';
import CardDetail from './CardDetail';

class App extends React.Component {
    state = { data: [], query: '', hasClicked: false};

    onTermSubmit = async term => {
        const response = await devex.get('/UNYXLmwrgBYGUut5nliFOezJW2I6ZLDlxlcLAm2gtZznmdsOV7Q', {
        }).catch(err =>  {
            this.setState({
                data: []
            });
        });

        if(response) {
            this.setState({
                data: response.data,
                query: 'UNYXLmwrgBYGUut5nliFOezJW2I6ZLDlxlcLAm2gtZznmdsOV7Q',
                hasClicked: true
            });
        }
    };

    resetDetails = () => {
        this.setState({
            data: [],
            query: '',
            hasClicked: false
        })
    }

    render() {
        let button;
        if(!this.state.hasClicked) {
            button = <button onClick={this.onTermSubmit}> Show Card </button>
        } else {
            button = <button onClick={this.resetDetails}> Hide Card </button>
        }
        return (
            <div className="ui container">
                <br/>
                <h3 style={{marginLeft: '420px'}}>Welcome to Pineapple</h3>
                <img src={pineapple} alt="pineapple" style={{height: "250px", width: "250px", marginLeft: '400px'}}/>
                <SearchBar query={this.state.query}/>
                {button}
                <br/>
                <CardDetail detail={this.state.data}/>
            </div>
        );
    }
}
export default App;