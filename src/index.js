import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    
    renderContent () {
        if (this.state.lat && !this.state.errorMessage) {
                return <SeasonDisplay lat={this.state.lat}/>
        }
        else if (this.state.errorMessage && !this.state.lat) {                                         return <div>Error: {this.state.errorMessage}</div>
        }
        return <Loading message="Please accept the location request"/>;
    }
    
    render() {
        return this.renderContent()
    }
}

ReactDOM.render( < App / > , document.querySelector('#root'));
