import React, { Component } from 'react'
import './notFound.css';

import AppProvider from './src/AppProvider';
import Header from './src/components/Header';
import Main from './src/components/Main';
import Footer from './src/components/Footer';

import './src/App.css';

export default class NotFound extends Component {
    render() {
        return (
            <div className="p-5" id='not-found' >
            <h1>Im not sure how you got here.<br/>
            But if you are already here, take a little break.</h1>
                <AppProvider>
        <div className="app">
          <Header />
          <Main />
          <Footer />
        </div>
      </AppProvider>
            </div>
        )
    }
}
