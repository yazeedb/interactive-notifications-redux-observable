import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Notification Squad</h1>

      <button className="success">Success</button>
      <button className="info">Info</button>
      <button className="warning">Warning</button>
      <button className="danger">Danger</button>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
