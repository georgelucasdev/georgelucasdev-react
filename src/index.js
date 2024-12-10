
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import RoutesApp from './routes';
import Footer from './components/Footer';
import './global.css';
import './styler.css';

function App() {
    return (
        <Router>
            <Menu />
            <RoutesApp />
            <Footer />
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
