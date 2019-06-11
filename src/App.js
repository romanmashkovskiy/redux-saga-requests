import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {fetchDog} from './store/dog/actions';
import {STATE_STATUSES} from './utils/stateStatuses';


class App extends Component {
    render() {
        const {fetching, dog, onRequestDog, error} = this.props;

        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={dog || logo} className='App-logo' alt='logo'/>
                    <h1 className='App-title'>Welcome to Dog Saga</h1>
                </header>

                {dog ? (
                    <p className='App-intro'>Keep clicking for new dogs</p>
                ) : (
                    <p className='App-intro'>Replace the React icon with a dog!</p>
                )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={onRequestDog}>Request a Dog</button>
                )}

                {error && <p style={{color: 'red'}}>Uh oh - something went wrong!</p>}

            </div>
        );
    }
}

const mapStateToProps = ({dogState}) => {
    return {
        fetching: dogState.status === STATE_STATUSES.PENDING,
        dog: dogState.dog.message,
        error: dogState.error
    };
};

const mapDispatchToProps = {
    onRequestDog: fetchDog
};


export default connect(mapStateToProps, mapDispatchToProps)(App);