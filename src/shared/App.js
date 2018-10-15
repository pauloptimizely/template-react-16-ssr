import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

import './app.styl';

import UniversalComponent from './components/UniversalComponent';

class Test extends Component {
    render() {
        return (
            <h1>Test: { this.props.data }</h1>
        )
    }
}

const mapStateToProps = state => ({
    data: state,
});

const mapDispatchToProps = (dispatch) => ({}); 

const ConnectTest = connect(mapStateToProps, mapDispatchToProps)(Test);

const reducer = (state, action) => state;

const store = createStore(reducer, 'hello world')

/**
 * The `App` component is the entry point for the react app.
 * It is rendered on the client as well as on the server.
 *
 * You can start developing your react app here.
 */
export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <div>
                    <Helmet>
                        <title>App Component | React Universal</title>
                    </Helmet>

                    <h1>Welcome to React Fiber.</h1>
                    <UniversalComponent name="getting-started" />
                    <ConnectTest />
                </div>
            </Provider>
        );
    }
}
