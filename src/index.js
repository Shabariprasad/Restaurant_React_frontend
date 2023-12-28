import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; //mdb
import "@fortawesome/fontawesome-free/css/all.min.css"; // mdb fontawsome
import './bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom' //import browserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


