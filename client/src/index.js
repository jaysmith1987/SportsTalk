import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './about';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<About/>, document.getElementById('root'));
registerServiceWorker();
