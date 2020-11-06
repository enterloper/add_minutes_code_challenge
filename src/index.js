import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import Header from './components/Header';
import TimeSelection from './components/TimeSelection';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header />
            <TimeSelection />
            <Footer />      
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('affinipay-app'));